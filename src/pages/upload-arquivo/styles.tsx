import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;

const Titulo = styled.h1`
  color: #000;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 500;
`;

const CaixaUpload = styled.div`
  & p {
    color: #bcb6b6;
    font-family: 'Roboto';
    font-size: 1.5rem;
    margin: 0;
  }

  & input {
    display: none;
  }

  & label {
    max-width: 280px;
    min-height: 150px;
    background: #bbdefb;
    margin-top: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0d47a1;
    font-family: 'Roboto';
    border: 2px dashed;
  }
`;

export { Wrapper, Titulo, CaixaUpload };
