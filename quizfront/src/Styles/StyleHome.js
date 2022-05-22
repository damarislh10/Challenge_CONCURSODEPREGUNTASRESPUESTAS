import styled from "styled-components";

export const DivBackground = styled.div`
  background: url(https://res.cloudinary.com/df90q7vvj/image/upload/v1653164303/sofkaTest/New_20folder_pocyiw.jpg)
    center center / cover;
  height: 90vh;
  color: #fff;
`;

export const ImageLight = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const BottonPlay = styled.button`
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
export const Divcontainerbtn = styled.div`
  width: 50%;
  text-align: center;
  margin: auto;
`;

export const ImageLogo = styled.img`
  width: 300px;
  margin-top: 40%;
`;
