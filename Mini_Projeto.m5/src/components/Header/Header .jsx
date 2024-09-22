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
          A Uber é uma plataforma de transporte que conecta passageiros a motoristas por meio de um aplicativo. 
          Fundada em 2009, revolucionou a mobilidade urbana, permitindo que usuários solicitem corridas com facilidade.
           Oferece opções como UberX e UberBLACK, além de serviços de entrega com o Uber Eats. Apesar de controvérsias sobre regulamentação, continua a ser uma das líderes do setor, sempre buscando inovações para melhorar a experiência do usuário.
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
