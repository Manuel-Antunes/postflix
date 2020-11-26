import React from 'react';
import {Container, LoginCenter} from './style.jsx';

function Dashboard() {
  return (
    <Container>
      <LoginCenter>
        <input type="email" placeholder="Digite Seu E-mail"></input>
        <input type="password" placeholder="Digite Sua Senha"></input><br></br>
        <button>Entrar</button>
      </LoginCenter>
    </Container>
    
  )
}

export default Dashboard;