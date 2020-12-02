import React from 'react';
import { Form } from '@rocketseat/unform';

function AddUser() {
  return (
    <>
      <Form > 
        <label htmlFor=""></label>
        <input type="text" id="titulo"/>
        <label htmlFor=""></label>
        <input type="text" id="foto"/>
        <label htmlFor=""></label>
        <input type="bolean" id="post"/>
      </Form>
    </>
    
  )
}

export default AddUser;