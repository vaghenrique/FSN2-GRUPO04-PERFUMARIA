// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
  { id: 1, name: 'Perfume A', description: 'Descrição do Perfume A', price: 'R$ 100' },
  { id: 2, name: 'Perfume B', description: 'Descrição do Perfume B', price: 'R$ 150' },
  { id: 3, name: 'Perfume C', description: 'Descrição do Perfume C', price: 'R$ 200' },
];

function Home() {
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
                <p className="card-text">Preço: {product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">Ver Detalhes</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
