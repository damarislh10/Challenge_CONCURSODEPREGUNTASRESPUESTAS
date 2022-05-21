import styled from "styled-components";
import { Table } from "react-bootstrap";
import { BottonPlay, DivContForm } from "./StyleUserName";

export const DivContHistory = styled(DivContForm)`
  padding: 3% 5%;
`;

export const TableSty = styled(Table)`
  color: #fff;
`;
export const Field = styled.td`
  color: #fff !important;
`;

export const ButtonNewGame = styled(BottonPlay)`
  margin-top: 0%;
  width: 30%;
  padding: 1%;
`;

export const ContainBtnsHis = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-around;
  margin: 5% 0;
`;

export const ButtonHome = styled(ButtonNewGame)`
  background-color: #234e23;
  &:hover {
    background: rgb(35, 78, 35,.5);
  }
`;
