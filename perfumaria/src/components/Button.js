// src/components/Button.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Button({ onClick, children, variant = 'primary' }) {
  return (
    <button className={`btn btn-${variant} m-2`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
