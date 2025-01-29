// src/components/Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <div className="container">
        <p>&copy; 2025 La Belle Essence. Todos os direitos reservados.</p>

        <div className="row">
          <div className="col-12 col-md-6">
            <h5>Endereço</h5>
            <p>Centro Municipal de Pequenos Negócios - Beco da Poeira - Avenida Imperador, 546 - Centro, Fortaleza - CE, 60015-050</p>
          </div>
          <div className="col-12 col-md-6">
            <h5>Redes Sociais</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.instagram.com/labelle_essence" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="fa fa-instagram" aria-hidden="true"></i> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/labelleessence" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="fa fa-facebook" aria-hidden="true"></i> Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <h5>Suportes e Contatos</h5>
            <ul className="list-unstyled">
              <li><strong>Contato:</strong> <a href="mailto:contato@labelleessence.com.br" className="text-white">contato@labelleessence.com.br</a></li>
              <li><strong>Vendas:</strong> <a href="mailto:vendas@labelleessence.com" className="text-white">vendas@labelleessence.com</a></li>
              <li><strong>Informações:</strong> <a href="mailto:info@labelleessence.com.br" className="text-white">info@labelleessence.com.br</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-6">
            <ul className="list-unstyled">
              <li><strong>Suporte:</strong> <a href="mailto:suporte@labelleessence.com" className="text-white">suporte@labelleessence.com</a></li>
              <li><strong>Telefone:</strong> <a href="tel:+55859999991234" className="text-white">(85) 99999-1234 (WhatsApp)</a></li>
              <li><strong>WhatsApp Business:</strong> <a href="tel:+5585988884321" className="text-white">(85) 98888-4321</a>, <a href="tel:+5585987656789" className="text-white">(85) 98765-6789</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
