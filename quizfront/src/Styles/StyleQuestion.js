import styled from "styled-components";
import { Button, Form } from "react-bootstrap";

export const DivForm = styled.div`
  display: block;
  height: 100vh;
  padding-bottom: 120px;
  margin-top: 3%;
`;

export const FormStyle = styled(Form)`
  border-radius: 10px;
  box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
  width: 50%;
  margin: auto;

  @media (max-width: 540px) {
    width: 90%;
  }
`;
export const Titulo = styled.h2`
  padding: 1rem;
  text-align: center;
  margin: 0;
  color: var(--white);
`;

export const RadioStyled = styled(Form.Check)`
  padding: 0;
  font-size: 1.2rem;
  margin: 1rem 0;
  @media (max-width: 540px) {
    margin-left: 2rem;
  }
`;

export const ButtonStyled = styled(Button)`
  background-color: #d4caf3;
  color: #fffffe;
  border: none;
  width: 100%;
  font-size: 1.1rem;
  padding: 1.3rem;
  &:hover {
    background-color: var(--purple);
  }
  &:focus {
    outline: none;
    background-color: var(--purple);
  }
`;

export const ContainerStyled = styled.div`
  background-color: #0000;
  border-radius: 10px;
  box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
  width: 80%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



export const DivRadio = styled.div`
  border: 2px solid var(--grey);
  border-radius: 4px;
  margin: 1.5%;
  padding-left: 7%;
`;
