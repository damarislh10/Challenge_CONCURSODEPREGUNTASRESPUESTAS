import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loseGame, prizesCoins } from "../../Helpers/Awards/prizesCoins";
import { getRamdomly } from "../../Helpers/QuestionProcess/ramdomlyQuestion";

import {
  ButtonStyled,
  DivForm,
  DivRadio,
  FormStyle,
  RadioStyled,
  Titulo,
} from "../../Styles/StyleQuestion";

let lengthQuestions = 0;
export const Questions = () => {
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertError, setAlertError] = useState(false);

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
  const navigate = useNavigate();

  useEffect(() => {
    const getQuestions = async () => {
      let groupQuestions = await getRamdomly();
      lengthQuestions = groupQuestions.length;

      const currentQuizData = groupQuestions[questionState.numberQuestion];
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

    getQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionState.numberQuestion]);

  const onChange = (e) => {
    setQuestion({
      ...questionState,
      answerSelect: e.currentTarget.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    if (questionState.answerSelect === questionState.question.correct) {
      const prize = prizesCoins(questionState.numberQuestion);

      setAlertSuccess(true);
      setAlertError("");

      Swal.fire({
        title: `¡Ganaste ${prize} monedas!`,
        background: "#ACFFCF",
        showConfirmButton: false,
        timer: 1500,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } else {
      console.log(loseGame());
      setAlertError(true);
      // navigate("/history");
    }

    if (questionState.numberQuestion === lengthQuestions) {
      navigate("/history");
    }
  };

  const exitgame = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Esta seguro de salir del juego ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, salir!",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(navigate("/history"));
        }
      });
  };
  return (
    <DivForm>
      <Button onClick={exitgame}>Salir del juego</Button>
      <FormStyle className="divform" onSubmit={handleSubmit}>
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

          <DivRadio style={{ background: alertSuccess ? "green" : "" }}>
            <RadioStyled
              type="radio"
              label={questionState.question.a}
              value={questionState.question.a}
              name={"Respuestas"}
              id={"Respuesta1"}
              onChange={onChange}
            />
          </DivRadio>
          <DivRadio style={{ background: alertSuccess ? "green" : "" }}>
            <RadioStyled
              type="radio"
              label={questionState.question.b}
              value={questionState.question.b}
              name={"Respuestas"}
              id={"Respuesta2"}
              onChange={onChange}
            />
          </DivRadio>
          <DivRadio style={{ background: alertSuccess ? "green" : "" }}>
            <RadioStyled
              type="radio"
              label={questionState.question.c}
              value={questionState.question.c}
              name={"Respuestas"}
              id={"Respuesta3"}
              onChange={onChange}
            />
          </DivRadio>
          <DivRadio style={{ background: alertSuccess ? "green" : "" }}>
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
