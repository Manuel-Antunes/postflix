import styled from 'styled-components';
import cadastro from '~/assets/cadastro.png';
import { darken } from 'polished';
export const Container = styled.div`
  display: flex;
  background-image: ${cadastro};
  width: 60vw;
  align-items: center;
  justify-content: center;
  height: 55vh;
  margin-top: 22.5vh;
  margin-left: 5vw;
  box-sizing: border-box;
  padding-top: 5vh;
  padding-left: 5vw;
  border-radius: 5px;
  form {
    padding: 30px;
    & > *{
      margin-top: 20px;
    }
    background-color: white;
    width: 50vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    input {
      width: 100%;
      height: 30px;
      padding: 10px;
      
    }
    label {
      align-self: baseline;
    }
    button {
      background-color: #7159c1;
      color: black;
      border-style: none;
      width: 20vw;
      height: 10vh;
      border-radius: 5px;
      color: #fff;
      font-weight: bold;
      &:hover {
        background-color: ${darken(0.175, '#7159c1')};
      }
    }
  }
`;
