// src/components/Cart.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cart() {
  const cart = [
    { id: 1, name: 'Perfume A', description: 'Descrição do Perfume A', price: 'R$ 100', quantity: 1 },
    { id: 2, name: 'Perfume B', description: 'Descrição do Perfume B', price: 'R$ 150', quantity: 2 },
  ];

  return (
    <div className="container mt-4">
      <h1>Carrinho de Compras</h1>
      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Preço: {item.price}</p>
                <p className="card-text">Quantidade: {item.quantity}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
