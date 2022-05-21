import { requestData } from "../Data/requestData";
import {
  urlfifthLevel,
  urlfirstLevel,
  urlfourthLevel,
  urlsecondLevel,
  urlthirdLevel,
} from "../Data/urls";

export const getRamdomly = async () => {
  let groupLevel = [];

  const firstLevel = await requestData(urlfirstLevel);

  const randomly1 = firstLevel[Math.floor(Math.random() * firstLevel.length)];
  const seleccion = firstLevel[randomly1];
  firstLevel.splice(seleccion, 1);
  groupLevel.push(randomly1);

  const secondLevel = await requestData(urlsecondLevel);
  const randomly2 = secondLevel[Math.floor(Math.random() * secondLevel.length)];
  const seleccion2 = secondLevel[randomly2];
  secondLevel.splice(seleccion2, 1);
  groupLevel.push(randomly2);


  const thirdLevel = await requestData(urlthirdLevel);
  const randomly3 = thirdLevel[Math.floor(Math.random() * thirdLevel.length)];
  const seleccion3 = thirdLevel[randomly3];
  thirdLevel.splice(seleccion3, 1);
  groupLevel.push(randomly3);

  const fourthLevel = await requestData(urlfourthLevel);
  const randomly4 = fourthLevel[Math.floor(Math.random() * fourthLevel.length)];
  const seleccion4 = fourthLevel[randomly4];
  fourthLevel.splice(seleccion4, 1);
  groupLevel.push(randomly4);

  const fifthLevel = await requestData(urlfifthLevel);
  const randomly5 = fifthLevel[Math.floor(Math.random() * fifthLevel.length)];
  const seleccion5 = fifthLevel[randomly5];
  fifthLevel.splice(seleccion5, 1);
  groupLevel.push(randomly5);

  groupLevel = [randomly1, randomly2, randomly3, randomly4, randomly5];
  return groupLevel;
};
