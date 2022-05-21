import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { totalMoney } from "../../Helpers/Awards/prizesCoins";
import { getDataUser, sendHistoryAward } from "../../Helpers/History/getLocalHistory";

const HistoryPlay = () => {
  const [money, setMoney] = useState();
  const navigate = useNavigate();

  useEffect(() => {

    const getDataUserHistory = async () => {
      let nameUser = await getDataUser();
      console.log(sendHistoryAward());
      console.log(nameUser);

      // for (let i = 0; i < perfilUser.length; i++) {
      //   let nameRequest = perfilUser[i];

      //   for (let j = 0; j < nameUser.length; j++) {
      //     const element = nameUser[j];
      //     if (toString(nameRequest).includes(toString(element.nombre))) {
      //       console.log(element.nombre);
      //     }
      //     // if (nameRequest.nombre.includes(element.nombre)) {
      //     //   console.log(`coincide '${element.nombre}'`);
      //     // }
      //   }
      //   // if (perfilUser.includes(element)) {
      //   //   console.log(`coincide '${element}'`);
      //   // } else {
      //   //   console.log("nada");
      //   // }
      // }
    };
    setMoney(totalMoney());

    getDataUserHistory();
  }, []);
  return (
    <div>
      Es el historico juego
      <h2>Total ganado {money}</h2>
      <Button onClick={() => navigate("/questions")}>Volver a jugar</Button>
      <Button>De vuelta a casa</Button>
    </div>
  );
};

export default HistoryPlay;
