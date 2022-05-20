import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const StartPlay = () => {
  const navigate = useNavigate();


  return (
    <div>
      <Button onClick={() => navigate("/user")}>Jugar</Button>
    </div>
  );
};

export default StartPlay;
