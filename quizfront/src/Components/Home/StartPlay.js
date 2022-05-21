import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BottonPlay, DivBackground, Divcontainerbtn, ImageLight } from "../../Styles/StyleHome";
import { DivForm, FormStyle } from "../../Styles/StyleQuestion";

const StartPlay = () => {
  const navigate = useNavigate();

  return (
    <DivForm>
      <FormStyle className="divform">
        <DivBackground>
          <Divcontainerbtn>
          <BottonPlay className="btn" onClick={() => navigate("/user")}>Jugar</BottonPlay>
          </Divcontainerbtn>
        </DivBackground>
      </FormStyle>
    </DivForm>
  );
};

export default StartPlay;
