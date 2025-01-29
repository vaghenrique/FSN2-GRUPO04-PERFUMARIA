// src/components/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';
import Button from './Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cart() {
  const { state, dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity > 0) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    } else {
      removeFromCart(id);
    }
  };

  const finalizePurchase = () => {
    // Verificar se o carrinho está vazio
    if (state.cart.length === 0) {
      alert('O carrinho está vazio!');
      return;
    }
     // Exibir alerta de confirmação de compra
     alert('Compra concluída com sucesso!');
     // Zerar o carrinho
     dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div className="container mt-4">
      <h1>Carrinho de Compras</h1>
      {state.cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        state.cart.map(item => (
          <div key={item.id} className="mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Preço: R$ {item.price}</p>
                <p className="card-text">
                  Quantidade: 
                  <input 
                    type="number" 
                    className="form-control d-inline-block w-25 ml-2" 
                    value={item.quantity} 
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} 
                  />
                </p>
                <Button onClick={() => removeFromCart(item.id)}>Remover</Button>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="mt-4">
        <h3>Total de Itens: {state.totalItems}</h3>
        <h3>Preço Total: R$ {state.totalPrice}</h3>
        <Button onClick={finalizePurchase}>Comprar Agora</Button>
      </div>
    </div>
  );
}

export default Cart;
