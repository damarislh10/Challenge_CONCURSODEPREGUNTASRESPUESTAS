import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { totalMoney } from "../Helpers/prizesCoins";

const HistoryPlay = () => {
  const [money, setMoney] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setMoney(totalMoney());
  }, []);
  return (
    <div>
      Es el historico juego
      <h2>Total ganado {money}</h2>
      <Button onClick={()=> navigate("/questions")}>Volver a jugar</Button>
      <Button>De vuelta a casa</Button>
    </div>
  );
};

export default HistoryPlay;
