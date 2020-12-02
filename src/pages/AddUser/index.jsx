import React from 'react';
import { Form } from '@rocketseat/unform';
import GoogleButton from '~/components/GoogleButton';

function AddUser() {
  return (
    <>
      <Form > 
        <label htmlFor=""></label>
        <input type="text" id="nome"/>
        <label htmlFor=""></label>
        <input type="text" id="email"/>
        <label htmlFor=""></label>
        <input type="bolean" id="isAuctor"/>
        <label htmlFor=""></label>
        <input type="password" id="password"/>
        <button type="submit" id="button">Cadastrar</button>
      </Form>
      <GoogleButton />
    </>
    
  )
}

export default AddUser;