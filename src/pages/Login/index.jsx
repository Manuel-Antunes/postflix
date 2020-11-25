import React from 'react';
import Header from '../../components/Header/index';
import Posts from '../../components/Posts/index';

// import { Container } from './styles';

function Dashboard() {
  return (
    <div>
      <Header name="Login" itens={['Login', 'Configurações']}></Header>
      <Posts></Posts><Posts></Posts><Posts></Posts><Posts></Posts><Posts></Posts><Posts></Posts><Posts></Posts><Posts></Posts>v
    
    </div>
  )
}

export default Dashboard;