import React from 'react';

import { Container } from './styles';
import { useField } from '@rocketseat/unform';

function InputFoto() {
  const { defaultValue, registerField } = useField('foto');
  function handleChange(event) {}
  return (
    <Container>
      <label htmlFor="foto">
        <img src="" alt="" />
        <input
          type="file"
          accept="image/*"
          id="foto"
          onChange={handleChange}
        ></input>
      </label>
    </Container>
  );
}

export default InputFoto;
