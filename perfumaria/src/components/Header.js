// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header className="bg-dark text-white">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <Link className="navbar-brand" to="/">Perfume Shop</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Carrinho</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre">Sobre</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
