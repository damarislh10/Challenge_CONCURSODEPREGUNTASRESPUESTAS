import styled from "styled-components";

export const DivContForm = styled.div`
  background-color: rgb(23, 21, 41, 0.5);
  color: #fff;
  text-align: center;
  padding: 25%;
  height: 100%;
`;
export const BottonPlay = styled.button`
  margin-top: 50%;
  padding: 2% 0;
  width: 50%;
  background: rgb(0, 51, 99);
  text-transform: uppercase;
  font-weight: bold;
  color: #ffff;
  &:hover {
    background: rgb(0, 51, 99, 0.5);
    color: #ffff;
  }
`;

export const ButtonForm = styled(BottonPlay)`
  margin-top: 0%;
`;
