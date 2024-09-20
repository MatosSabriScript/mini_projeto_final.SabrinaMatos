import './App.css'


import React from 'react';  

export function App() {  
  const handleButtonClick1 = () => {  
    alert('Botão 1 clicado!');  
  };  

  const handleButtonClick2 = () => {  
    alert('Botão 2 clicado!');  
  };  

  return (  
    <div style={{ textAlign: 'center', padding: '20px' }}>  
      <h1>Sobre a Uber</h1>  
      <p>  
        A Uber é uma plataforma de transporte que conecta motoristas parceiros a passageiros por meio de um aplicativo.   
        Oferece várias opções de transporte, incluindo carros, bicicletas e até entrega de refeições.  
      </p>  

      <div>  
        <button onClick={handleButtonClick1} style={{ margin: '10px' }}>Sobre o projeto</button>  
        <button onClick={handleButtonClick2} style={{ margin: '10px' }}>Cards</button>  
      </div>  
    </div>  
  );  
}
