import './App.css';  
import React, { useEffect, useState } from 'react';  

export function App() {  
  const [dados, setDados] = useState([]);  
  const [trueUsers, setTrueUsers] = useState([]);  
  const [falseUsers, setFalseUsers] = useState([]);  

 

  useEffect(() => {  
    fetch("http://localhost:5000/user")  
      .then((res) => res.json())  
      .then((data) => setDados(data.listPeople))  
      .catch((error) => console.error("Erro ao buscar dados da API", error));  

    // Pegar os usuários com status true  
    fetch("http://localhost:5000/user/true")  
      .then((res) => res.json())  
      .then((data) => setTrueUsers(data.listPeopleTrue))  
      .catch((error) => console.error("Erro ao buscar usuários com status true", error));  

    // Pegar os usuários com status false  
    fetch("http://localhost:5000/user/false")  
      .then((res) => res.json())  
      .then((data) => setFalseUsers(data.listPeopleFalse))  
      .catch((error) => console.error("Erro ao buscar usuários com status false", error));  
  }, []);  

  // Função para scroll suave  
  const handleScroll = (id) => {  
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });  
  };  

  return (  
    <div>  
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

      <section id="projeto">  
        <h2>Projeto 🚀</h2>  
        <p>Este projeto foi desenvolvido para exibir as informações da API de usuários temporários.</p>  
      </section>  

      <section id="cards">  
        <h2>Usuários 🚖</h2>  

        <h3>Todos os Usuários</h3>  
        <div className="cards-container">  
          {dados.length === 0 ? (  
            <p>Carregando dados...</p>  
          ) : (  
            dados.map((user, index) => (  
              <div key={index} className="card">  
                <h3>{user.raceNumber}</h3>  
                <p>Status: {user.statusComplemented ? "Completo" : "Incompleto"}</p>  
                <span>Data: {user.createdAt}</span>  
              </div>  
            ))  
          )}  
        </div>  

        <h3>Usuários com Status True ✅</h3>  
        <div className="cards-container">  
          {trueUsers.length === 0 ? (  
            <p>Carregando dados...</p>  
          ) : (  
            trueUsers.map((user, index) => (  
              <div key={index} className="card">  
                <h3>{user.raceNumber}</h3>  
                <p>Status: Completo</p>  
                <span>Data: {user.createdAt}</span>  
              </div>  
            ))  
          )}  
        </div>  

        <h3>Usuários com Status False ❌</h3>  
        <div className="cards-container">  
          {falseUsers.length === 0 ? (  
            <p>Carregando dados...</p>  
          ) : (  
            falseUsers.map((user, index) => (  
              <div key={index} className="card">  
                <h3>{user.raceNumber}</h3>  
                <p>Status: Incompleto</p>  
                <span>Data: {user.createdAt}</span>  
              </div>  
            ))  
          )}  
        </div>  
      </section>  
    </div>  
  );  
}