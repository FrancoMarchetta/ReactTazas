import React from 'react';
import './FloatingButton.css'; // Archivo CSS para estilos

const FloatingButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+51987654321"
      className="btn-wsp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-whatsapp icono"></i>
    </a>
  );
};

export default FloatingButton;
