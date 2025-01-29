// src/components/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';
import Button from './Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="container mt-4">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="img-fluid mb-4" />
      <p>{product.description}</p>
      <p>Preço: R$ {product.price}</p>
      <Button onClick={addToCart}>Adicionar ao Carrinho</Button>
    </div>
  );
}

export default ProductDetails;
