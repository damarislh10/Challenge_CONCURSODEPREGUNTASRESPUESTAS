import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { PeticionData } from "../Helpers/PeticionData";
import {
  urlfifthLevel,
  urlfirstLevel,
  urlfourthLevel,
  urlsecondLevel,
  urlthirdLevel,
} from "../Helpers/urls";
import {
  ButtonStyled,
  DivForm,
  DivRadio,
  FormStyle,
  RadioStyled,
  Titulo,
} from "../Styles/StyleQuestion";

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
      let groupLevel = [];

      const firstLevel = await PeticionData(urlfirstLevel);

      const randomly1 =
        firstLevel[Math.floor(Math.random() * firstLevel.length)];
      const seleccion = firstLevel[randomly1];
      firstLevel.splice(seleccion, 1);
      groupLevel.push(randomly1);

      const secondLevel = await PeticionData(urlsecondLevel);
      const randomly2 =
        secondLevel[Math.floor(Math.random() * secondLevel.length)];
      const seleccion2 = secondLevel[randomly2];
      secondLevel.splice(seleccion2, 1);
      groupLevel.push(randomly2);

      console.log(randomly2);

      const thirdLevel = await PeticionData(urlthirdLevel);
      const randomly3 =
        thirdLevel[Math.floor(Math.random() * thirdLevel.length)];
      const seleccion3 = thirdLevel[randomly3];
      thirdLevel.splice(seleccion3, 1);
      groupLevel.push(randomly3);

      const fourthLevel = await PeticionData(urlfourthLevel);
      const randomly4 =
        fourthLevel[Math.floor(Math.random() * fourthLevel.length)];
      const seleccion4 = fourthLevel[randomly4];
      fourthLevel.splice(seleccion4, 1);
      groupLevel.push(randomly4);

      const fifthLevel = await PeticionData(urlfifthLevel);
      const randomly5 =
        fifthLevel[Math.floor(Math.random() * fifthLevel.length)];
      const seleccion5 = fifthLevel[randomly5];
      fifthLevel.splice(seleccion5, 1);
      groupLevel.push(randomly5);

      groupLevel = [randomly1, randomly2, randomly3, randomly4, randomly5];
      console.log(groupLevel);

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

  const onChange = (e) => {
    setQuestion({
      ...questionState,
      answerSelect: e.currentTarget.value,
    });
  };

  return (
    <DivForm>
      <FormStyle className="divform">
        <Form.Group
          className="mb-3 py-1 px-2"
          controlId="control_radio"
          style={{ padding: "4rem" }}
        >
          <div className="d-flex">
            <img
              style={{ width: "70px" }}
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644686451/DailyBitsSprint2/Property_1_3_wde9zs.png"
              alt="img-av"
            />
            <Titulo>{questionState.question.question}</Titulo>
          </div>
          <DivRadio>
            <RadioStyled
              type="radio"
              label={questionState.question.a}
              value={questionState.question.a}
              name={"Respuestas"}
              id={"Respuesta1"}
              onChange={onChange}
            />
          </DivRadio>
          <DivRadio>
            <RadioStyled
              type="radio"
              label={questionState.question.b}
              value={questionState.question.b}
              name={"Respuestas"}
              id={"Respuesta2"}
              onChange={onChange}
            />
          </DivRadio>
          <DivRadio>
            <RadioStyled
              type="radio"
              label={questionState.question.c}
              value={questionState.question.c}
              name={"Respuestas"}
              id={"Respuesta3"}
              onChange={onChange}
            />
          </DivRadio>
          <DivRadio>
            <RadioStyled
              type="radio"
              label={questionState.question.d}
              value={questionState.question.d}
              name={"Respuestas"}
              id={"Respuesta4"}
              onChange={onChange}
            />
          </DivRadio>
        </Form.Group>
        <ButtonStyled
          variant="primary"
          type="submit"
          onClick={() =>
            setQuestion({
              ...questionState,
              numberQuestion: questionState.numberQuestion + 1,
            })
          }
        >
          Comprobar
        </ButtonStyled>
      </FormStyle>
    </DivForm>
  );
};
