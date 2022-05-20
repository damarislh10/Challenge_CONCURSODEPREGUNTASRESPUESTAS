const saveMoney = [];

export const prizesCoins = (numQuest) => {
  if (numQuest <= 2) {
    saveMoney.push(20);
  } else {
    saveMoney.push(40);
  }
  let moneyWon = groupQuestionsMoney(saveMoney);
  return moneyWon;
};

export const totalMoney = () => {
  let sum = 0;

  for (let i = 0; i < saveMoney.length; i++) {
    sum += saveMoney[i];
  }

  console.log("total monedas ganadas " + sum);
  return sum;
};

export const groupQuestionsMoney = (prize) => {
  let moneyWon = 0;
  saveMoney.forEach(function (money, i) {
    moneyWon = saveMoney[saveMoney.length - 1];
    console.log("soy ultimo", money);
  });

  return moneyWon;
};
