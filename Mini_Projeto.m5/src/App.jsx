import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header .jsx'
import Section from './components/Section/Section';
import Card from './components/Card/Card';

export function App() {
  const [dados, setDados] = useState([]);
  const [trueUsers, setTrueUsers] = useState([]);
  const [falseUsers, setFalseUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setDados(data.listPeople))
      .catch((error) => console.error("Erro ao buscar dados da API", error));

    fetch("http://localhost:5000/user/true")
      .then((res) => res.json())
      .then((data) => setTrueUsers(data.listPeopleTrue))
      .catch((error) => console.error("Erro ao buscar usuários com status true", error));

    fetch("http://localhost:5000/user/false")
      .then((res) => res.json())
      .then((data) => setFalseUsers(data.listPeopleFalse))
      .catch((error) => console.error("Erro ao buscar usuários com status false", error));
  }, []);

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header handleScroll={handleScroll} />
      <Section
        id="projeto"
        title="Projeto 🚀"
        content="Este projeto foi desenvolvido para exibir as informações da API de usuários temporários..."
      />

      <section id="cards">
        <h2>Usuários 🚖</h2>
        <h3>Todos os Usuários</h3>
        <div className="cards-container">
          {dados.length === 0 ? (
            <p>Carregando dados...</p>
          ) : (
            dados.map((user, index) => <Card key={index} user={user} />)
          )}
        </div>

        <h3>Usuários com Status True ✅</h3>
        <div className="cards-container">
          {trueUsers.length === 0 ? (
            <p>Carregando dados...</p>
          ) : (
            trueUsers.map((user, index) => <Card key={index} user={user} />)
          )}
        </div>

        <h3>Usuários com Status False ❌</h3>
        <div className="cards-container">
          {falseUsers.length === 0 ? (
            <p>Carregando dados...</p>
          ) : (
            falseUsers.map((user, index) => <Card key={index} user={user} />)
          )}
        </div>
      </section>
    </div>
  );
}
