# 🚀 Mini Projeto de Gerenciamento de Usuários Temporários

Este é um projeto desenvolvido em React que faz a conexão com uma API para exibir informações sobre **usuários temporários**. A API retorna listas de usuários com status de complemento, que são exibidos em seções diferentes: **Todos os Usuários**, **Usuários com Status True** e **Usuários com Status False**. O projeto tem como objetivo apresentar dados de maneira organizada e permitir uma experiência de navegação suave.

## 📑 Funcionalidades

- **Listagem de usuários**: Exibe uma lista de todos os usuários, diferenciando entre os que têm status "true" e "false".
- **Seções de status**: Permite visualizar separadamente usuários com status **True** e **False**.
- **Navegação suave**: Scroll automático para seções específicas da página.
- **Integração com API**: Consome uma API para obter os dados dos usuários.



## 🚀 Instalação e Execução

### Pré-requisitos

- **Node.js** instalado na máquina.
- Um gerenciador de pacotes como **npm** ou **yarn**.

### Passos

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/MatosSabriScript/mini_projeto_final.SabrinaMatos.git
   cd Mini_Projeto.m5
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   # ou, se estiver usando yarn
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**:

   ```bash
   npm start
   # ou, se estiver usando yarn
   yarn start
   ```

4. **Verifique o funcionamento da API**:
   
   Certifique-se de que a API de usuários está rodando localmente no endereço `http://localhost:7070`. Se necessário, ajuste o endpoint no código para o endereço correto.

5. **Acesse a aplicação**:

   Acesse [http://localhost:3000](http://localhost:3000) no navegador para ver a aplicação rodando.

## 🛠️ Estrutura dos Componentes

### Header

Exibe um vídeo de fundo e um pequeno texto sobre a Uber, além de dois botões para navegação suave até as seções "Sobre o Projeto" e "Cards".

### Section

Componente reutilizável que recebe `id`, `title` e `content` como props e exibe a informação formatada. É utilizado para a seção "Sobre o Projeto" e pode ser facilmente expandido.

### Card

Componente que recebe um `user` como prop e exibe detalhes como **raceNumber**, **status complementado** e **data de criação**. Os cards são exibidos em três seções diferentes: Todos os Usuários, Usuários com Status True e Usuários com Status False.

## 📡 API

A aplicação faz chamadas para três endpoints:

1. `GET /user`: Retorna todos os usuários.
2. `GET /user/true`: Retorna usuários com status `True`.
3. `GET /user/false`: Retorna usuários com status `False`.

Exemplo de resposta da API:

```json
{
  "listPeople": [
    {
      "raceNumber": "123",
      "statusComplemented": true,
      "createdAt": "2023-09-01"
    },
    {
      "raceNumber": "456",
      "statusComplemented": false,
      "createdAt": "2023-09-15"
    }
  ]
}
```

## 📦 Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Fetch API**: Para chamadas HTTP à API de usuários.
- **CSS**: Para estilização da aplicação.

## 🚧 Melhorias Futuras

- Adicionar paginação ou infinite scroll para listas maiores de usuários.
- Implementar um sistema de filtro dinâmico para buscar usuários por outros critérios além de `status`.
- Melhorar a UI com mais feedback visual (como animações ou transições).
- Integrar testes unitários e de integração com ferramentas como Jest.

## ✨ Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues, enviar PRs ou sugerir melhorias.


