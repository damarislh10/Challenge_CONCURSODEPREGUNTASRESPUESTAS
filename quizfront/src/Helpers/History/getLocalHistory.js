import { saveDataHistory } from "../Awards/prizesCoins";
import { requestData } from "../Data/requestData";
import { urluser } from "../Data/urls";

let perfilUser = JSON.parse(localStorage.getItem("userRegister"));
perfilUser = perfilUser !== null ? perfilUser : [];

let nombre = "";

export const getDataUser = async () => {
  let nameUser = await requestData(urluser);
  console.log(nameUser);
  console.log(perfilUser);

  let filtro = [
    ...perfilUser,
    ...nameUser.filter((p) => perfilUser.includes(p)),
  ];
  console.log(filtro);

  filtro.forEach((items) => {
    nombre = items.nombre;
  });

  return nombre;
};

export const sendHistoryAward = () => {
   const historyMoney = saveDataHistory();
  const HistoryPlay = {
    user: nombre,
    historicoWon: "",
    acumuladoTotal: 0,
  };

  return historyMoney;
};
