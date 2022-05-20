import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DivForm, FormStyle } from "../Styles/StyleQuestion";

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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <DivForm>
      <FormStyle className="divform" onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 py-1 px-2"
          controlId=""
          style={{ padding: "4rem" }}
        ></Form.Group>
        <Form.Label>Ingresa tu Nombre</Form.Label>
        <input
          type="text"
          required
          id="inputNombre"
          name="nombre"
          value={nombre}
          onChange={handleChanged}
        />

        <Button onClick={() => navigate("/questions")}>Ok</Button>
      </FormStyle>
    </DivForm>
  );
};
