import styled from "styled-components";
import { Button, Form } from "react-bootstrap";
import { ButtonForm } from "./StyleUserName";

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

export const ContainerQuestion = styled.div`
  background-color: rgb(23, 21, 41);
  -webkit-box-shadow: -1px -1px 11px 0px #2fff6e;
  box-shadow: -1px -1px 11px 0px #2fff6e;
  padding: 5% 0;
  margin-bottom: 5%;
`;
export const Titulo = styled.h2`
  padding: 1rem;
  font-size: 27px;
  text-align: center;
  margin: 0;
  color: var(--white);
`;

export const RadioStyled = styled(Form.Check)`
  padding: 0;
  font-size: 1.2rem;
  margin: 1rem 2rem;
  @media (max-width: 540px) {
    margin-left: 2rem;
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
  background-color: #385272;
  display: flex;
  align-items: center;
  height: 45px;
  border-radius: 4px;
  margin: 1.5%;
  padding-left: 7%;
`;

export const ContbtnComprobar = styled.div`
  display: flex;
  justify-content: center;
`;

export const SpanOption = styled.span`
  color: yellow;
`;

export const BtnExitGame = styled(ButtonForm)`
  width:20%;
  font-size: 12px;
  margin: 0 0 2% 2% ;
  padding:1%;
`;
