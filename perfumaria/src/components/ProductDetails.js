// src/components/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
  { id: 1, name: 'Perfume A', description: 'Descrição do Perfume A', price: 'R$ 100' },
  { id: 2, name: 'Perfume B', description: 'Descrição do Perfume B', price: 'R$ 150' },
  { id: 3, name: 'Perfume C', description: 'Descrição do Perfume C', price: 'R$ 200' },
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  return (
    <div className="container mt-4">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Preço: {product.price}</p>
    </div>
  );
}

export default ProductDetails;
