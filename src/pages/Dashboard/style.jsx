import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  a {
    text-decoration: none;
  }
  input {
    width: 100%;
  }
`;
export const Post = styled.li`
  display: flex;

  background: rgba(0, 0, 0, 0.1);
  flex-direction: column;
  align-items: center;
  label {
    font-family: 'Roboto', sans-serif;
    color: white;
    font-weight: bold;
    font-size: 3vh;
  }
  img {
    width: 20vw;
    border-radius: 4px;
    height: 350px;
   
  }
`;
