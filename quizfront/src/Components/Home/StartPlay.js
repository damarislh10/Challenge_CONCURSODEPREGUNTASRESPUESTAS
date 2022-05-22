import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BottonPlay,
  DivBackground,
  Divcontainerbtn,
  ImageLogo,
} from "../../Styles/StyleHome";
import { DivForm, FormStyle } from "../../Styles/StyleQuestion";

const StartPlay = () => {
  const navigate = useNavigate();

  return (
    <DivForm>
      <FormStyle className="divform">
        <DivBackground>
          <Divcontainerbtn>
            <ImageLogo
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1653176647/sofkaTest/logoGame-removebg-preview_ryhq6d.png"
              alt="logo"
            />
            <BottonPlay className="btn" onClick={() => navigate("/user")}>
              Jugar
            </BottonPlay>
          </Divcontainerbtn>
        </DivBackground>
      </FormStyle>
    </DivForm>
  );
};

export default StartPlay;
