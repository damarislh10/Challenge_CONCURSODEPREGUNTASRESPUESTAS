import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { prizesCoins, totalMoney } from "../../Helpers/Awards/prizesCoins";
import { getRamdomly } from "../../Helpers/QuestionProcess/ramdomlyQuestion";
import { DivBackground } from "../../Styles/StyleHome";
import "../../Styles/options.css";
import {
  DivForm,
  DivRadio,
  FormStyle,
  RadioStyled,
  Titulo,
  ContainerQuestion,
  ContbtnComprobar,
  SpanOption,
  BtnExitGame,
  ContainbtnTotal,
  LabelMoney,
  ImageMoney,
} from "../../Styles/StyleQuestion";
import { ButtonForm } from "../../Styles/StyleUserName";
import { sendHistoryAward } from "../../Helpers/History/getLocalHistory";

let lengthQuestions = 0;
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

      Swal.fire({
        title: `¡Ganaste ${prize} monedas!`,
        background: "rgb(23, 21, 41)",
        color: "#ffff",
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
      Swal.fire({
        title: `Juego Terminado`,
        background: "rgb(23, 21, 41)",
        color: "#ffff",
        showDenyButton: true,
        confirmButtonText: "Volver a jugar",
        denyButtonText: `Volver a casa`,
        showConfirmButton: true,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `Estas listo a iniciar`,
            background: "rgb(23, 21, 41)",
            color: "#ffff",
          });
          resetGame();
        } else if (result.isDenied) {
          navigate("/");
        }
      });
    }

    if (questionState.numberQuestion === lengthQuestions) {
      navigate("/history");
      sendHistoryAward();
    }
  };

  const resetGame = () => {
    setQuestion({
      ...questionState,
      numberQuestion: 0,
    });
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
        title: "¿Esta seguro de salir del juego ?",
        icon: "warning",
        background: "rgb(23, 21, 41)",
        color: "#ffff",
        showCancelButton: true,
        confirmButtonText: "Si, salir!",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(navigate("/"));
        }
      });
  };
  return (
    <DivForm>
      <ContainbtnTotal>
        <BtnExitGame className="btn" onClick={exitgame}>
          Salir del juego
        </BtnExitGame>
        <label>Ronda {questionState.numberQuestion + 1}</label>
        <LabelMoney>
          <ImageMoney
            src="https://res.cloudinary.com/df90q7vvj/image/upload/v1653187253/sofkaTest/icons8-promedio-2-48-removebg-preview_zgbuam.png"
            alt="money"
          />
          {totalMoney()}
        </LabelMoney>
      </ContainbtnTotal>
      <FormStyle className="divform" onSubmit={handleSubmit}>
        <DivBackground>
          <Form.Group
            className="mb-3 py-1 px-2"
            controlId="control_radio"
            style={{ padding: "4rem" }}
          >
            <ContainerQuestion>
              <Titulo>{questionState.question.question}</Titulo>
            </ContainerQuestion>

            <DivRadio
              className={
                questionState.question.correct === questionState.answerSelect
                  ? "correct"
                  : "incorrect"
              }
            >
              <SpanOption> A: </SpanOption>
              <RadioStyled
                type="radio"
                label={questionState.question.a}
                value={questionState.question.a}
                name={"Respuestas"}
                id={"Respuesta1"}
                onChange={onChange}
              />
            </DivRadio>
            <DivRadio
              className={
                questionState.question.correct === questionState.answerSelect
                  ? "correct"
                  : "incorrect"
              }
            >
              <SpanOption> B: </SpanOption>
              <RadioStyled
                type="radio"
                label={questionState.question.b}
                value={questionState.question.b}
                name={"Respuestas"}
                id={"Respuesta2"}
                onChange={onChange}
              />
            </DivRadio>
            <DivRadio
              className={
                questionState.question.correct === questionState.answerSelect
                  ? "correct"
                  : "incorrect"
              }
            >
              <SpanOption> C: </SpanOption>
              <RadioStyled
                type="radio"
                label={questionState.question.c}
                value={questionState.question.c}
                name={"Respuestas"}
                id={"Respuesta3"}
                onChange={onChange}
              />
            </DivRadio>
            <DivRadio
              className={
                questionState.question.correct === questionState.answerSelect
                  ? "correct"
                  : "incorrect"
              }
            >
              <SpanOption> D: </SpanOption>
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
          <ContbtnComprobar>
            <ButtonForm
              className="btn"
              type="submit"
              onClick={() =>
                setQuestion({
                  ...questionState,
                  numberQuestion: questionState.numberQuestion + 1,
                })
              }
            >
              Comprobar
            </ButtonForm>
          </ContbtnComprobar>
        </DivBackground>
      </FormStyle>
    </DivForm>
  );
};
