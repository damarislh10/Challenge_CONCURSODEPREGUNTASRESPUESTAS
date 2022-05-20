import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { totalMoney } from "../Helpers/prizesCoins";

const HistoryPlay = () => {
  const [money, setMoney] = useState();

  useEffect(() => {
    setMoney(totalMoney());
  }, []);
  return (
    <div>
      Es el historico juego
      <h2>Total ganado {money}</h2>
      <Button></Button>
    </div>
  );
};

export default HistoryPlay;
