import React from 'react';
import './Header.css';

const Header = ({ handleScroll }) => {
  return (
    <header>
      <video autoPlay loop muted>
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <section id="sobre">
        <h1>Sobre a Uber 🚗</h1>
        <p>
          A Uber é uma plataforma de transporte que conecta motoristas parceiros
          a passageiros por meio de um aplicativo. Oferece várias opções de
          transporte, incluindo carros, bicicletas e até entrega de refeições.
        </p>
        <div className="buttons">
          <button onClick={() => handleScroll("projeto")}>Sobre o projeto</button>
          <button onClick={() => handleScroll("cards")}>Cards</button>
        </div>
      </section>
    </header>
  );
};

export default Header;
