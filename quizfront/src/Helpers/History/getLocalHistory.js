import axios from "axios";
import { saveDataHistory, totalMoney } from "../Awards/prizesCoins";
import { requestData } from "../Data/requestData";
import { urlHistoryPlay, urluser } from "../Data/urls";

let perfilUser = JSON.parse(localStorage.getItem("userRegister"));
perfilUser = perfilUser !== null ? perfilUser : [];

export const getDataUser = async () => {
  let nombre = "";
  let nameUser = await requestData(urluser);

  let filtro = [...nameUser, ...perfilUser.filter((p) => nameUser.includes(p))];
  console.log(filtro);

  filtro.forEach((items) => {
    nombre = items.nombre;
  });
  return nombre;
};

export const sendHistoryAward = async () => {
  const historyMoney = saveDataHistory();
  const totalAcomulado = totalMoney();
  const nombre = await getDataUser();

  const HistoryPlay = {
    user: nombre,
    historicoWon: historyMoney,
    acumuladoTotal: totalAcomulado,
  };

  HistorySendApi(HistoryPlay);
};

const HistorySendApi = (accumulhistory) => {
    axios.post(urlHistoryPlay, accumulhistory);
};
