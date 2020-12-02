import React from 'react';
import { Form } from '@rocketseat/unform';
import ImageInput from '../../components/InputFoto';
function AddUser() {
  return (
    <>
      <Form>
        <label htmlFor=""></label>
        <input type="text" id="titulo" />
        <ImageInput />
        <label htmlFor=""></label>
        <input type="bolean" id="post" />
        <button type="submit" id="button">
          Cadastrar
        </button>
      </Form>
    </>
  );
}

export default AddUser;
