import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;
  label {
    &:hover {
      opacity: 0.7;
    }
    img {
      height: 120px;
      width: 120px;
      background: #eee;
    }
    input {
      
      &:hover{
          cursor: pointer;
      }
    }
  }
`;
