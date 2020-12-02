import React from 'react';
import { Container, LoginCenter } from './style.jsx';
import { Form, Input } from '@rocketseat/unform';

function Dashboard() {
  function submitHandler(data) {
    console.log(data);
  }
  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <label htmlFor="login">Login</label>
        <Input name="" type="text" id="login" />
        <label htmlFor="">Password</label>
        <Input name="password" type="password" id="password" />
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}

export default Dashboard;
