import React, { useEffect, useState } from "react";
import { PeticionData } from "../Helpers/PeticionData";
import {
  urlfifthLevel,
  urlfirstLevel,
  urlfourthLevel,
  urlsecondLevel,
  urlthirdLevel,
} from "../Helpers/urls";

export const Questions = () => {
  const [questionState, setQuestion] = useState({
    numberQuestion: 0,
    question: {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      correct: "",
    },
    score: 0,
    answerIncorrect: 0,
    answerSelect: "",
  });

  useEffect(() => {
    const getData = async () => {
      const firstLevel = await PeticionData(urlfirstLevel);
      const randomly1 =
        firstLevel[Math.floor(Math.random() * firstLevel.length)];

      const secondLevel = await PeticionData(urlsecondLevel);
      const randomly2 =
        secondLevel[Math.floor(Math.random() * secondLevel.length)];

      const thirdLevel = await PeticionData(urlthirdLevel);
      const randomly3 =
        thirdLevel[Math.floor(Math.random() * thirdLevel.length)];

      const fourthLevel = await PeticionData(urlfourthLevel);
      const randomly4 =
        fourthLevel[Math.floor(Math.random() * fourthLevel.length)];

      const fifthLevel = await PeticionData(urlfifthLevel);
      const randomly5 =
        fifthLevel[Math.floor(Math.random() * fifthLevel.length)];

      const groupLevel = [
        randomly1,
        randomly2,
        randomly3,
        randomly4,
        randomly5,
      ];

      const currentQuizData = groupLevel[questionState.numberQuestion];
      console.log(currentQuizData);
      setQuestion({
        ...questionState,
        question: {
          question: currentQuizData.question,
          a: currentQuizData.a,
          b: currentQuizData.b,
          c: currentQuizData.c,
          d: currentQuizData.d,
          correct: currentQuizData.correcta,
        },
      });
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionState.numberQuestion]);

  return (
    <div>
      Questions
      <h2>{questionState.question.question}</h2>
      <h2>Es a{questionState.question.a}</h2>
      <h2>{questionState.question.b}</h2>
      <h2>{questionState.question.c}</h2>
      <h2>{questionState.question.d}</h2>
    </div>
  );
};
