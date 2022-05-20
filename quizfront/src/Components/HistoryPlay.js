import React, { useEffect } from "react";
import { totalMoney } from "../Helpers/prizesCoins";

const HistoryPlay = () => {
  useEffect(() => {
    totalMoney()
  }, []);
  return <div>Es el historico juego</div>;
};

export default HistoryPlay;
