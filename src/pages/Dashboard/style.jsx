import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  input {
    width: 100%;
  }
`;
export const PostList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  li {
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
      width: 200px;
    }
  }
`;
