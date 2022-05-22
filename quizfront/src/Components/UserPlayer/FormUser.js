import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { urluser } from "../../Helpers/Data/urls";
import { sendLocalStorage } from "../../Helpers/History/SendLocalHistory";
import { DivBackground } from "../../Styles/StyleHome";
import { DivForm, FormStyle } from "../../Styles/StyleQuestion";
import { ButtonForm, DivContForm } from "../../Styles/StyleUserName";

export const FormUser = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    nombre: "",
  });

  const { nombre } = usuario;

  const handleChanged = ({ target }) => {
    setUsuario({
      ...usuario,
      [target.name]: target.value,
    });
  };

  const postData = () => {
    axios
      .post(urluser, usuario)
      .then((response) => {
        console.log(response);
        navigate("/questions");
      })
      .catch((error) => console.log(error));
    sendLocalStorage(usuario);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <DivForm>
      <FormStyle className="divform" onSubmit={handleSubmit}>
        <DivBackground>
          <DivContForm>
            <Form.Group
              className="mb-3 py-1 px-2"
              controlId=""
              style={{ padding: "6rem" }}
            ></Form.Group>
            <Form.Label>Ingresa tu Nombre</Form.Label>
            <br />
            <input
              className="my-3"
              type="text"
              required
              id="inputNombre"
              name="nombre"
              value={nombre}
              onChange={handleChanged}
            />
            <br />
            <ButtonForm className="btn" onClick={() => postData()}>
              Listo
            </ButtonForm>
          </DivContForm>
        </DivBackground>
      </FormStyle>
    </DivForm>
  );
};
