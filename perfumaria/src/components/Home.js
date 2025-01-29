// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';
import Button from './Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const { dispatch } = useCart();

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Vitrine de Perfumes</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Preço: R$ {product.price}</p>
                <Link to={`/product/${product.id}`}>
                  <Button>Ver Detalhes</Button>
                </Link>
                <Button onClick={() => addToCart(product)}>Adicionar ao Carrinho</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
