import React from 'react';
import { Form } from '@rocketseat/unform';

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
      </Form>
    </>
    
  )
}

export default AddUser;