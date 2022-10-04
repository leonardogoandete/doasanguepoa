import React from 'react';

import './App.css';

const App = () => {
  
  const message = "Login";
  
  return <div className = "login">
         <h1>{message}</h1>
         <form>
          <div className = "user">
          <label id = "user">
            Nome de Usuário
          </label>
          </div>
          <div className = "password">
          <label id ="password">
            Senha
          </label>
          </div>
          <div className = "entrar">
          <label id ="entrar">
            Login
          </label>
          </div>
         </form>
         
  </div>;
};

export default App;