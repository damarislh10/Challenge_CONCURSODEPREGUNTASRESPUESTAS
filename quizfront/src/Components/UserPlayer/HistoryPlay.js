import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { requestData } from "../../Helpers/Data/requestData";
import { urlHistoryPlay } from "../../Helpers/Data/urls";
import { sendHistoryAward } from "../../Helpers/History/getLocalHistory";
import { DivContHistory, Field, TableSty } from "../../Styles/StyleHistoryGame";
import { DivBackground } from "../../Styles/StyleHome";
import { DivForm, FormStyle, Titulo } from "../../Styles/StyleQuestion";

const HistoryPlay = () => {
  const [history, setHistory] = useState({
    historyPlay: [],
  });

  const { historyPlay } = history;

  const navigate = useNavigate();

  useEffect(() => {
    sendHistoryAward();
    getAllHistoryPlay();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendHistoryAward]);

  const getAllHistoryPlay = async () => {
    let dataPlay = await requestData(urlHistoryPlay);
    dataPlay.reverse();
    setHistory({
      historyPlay: dataPlay,
    });
  };

  return (
    <DivForm>
      <FormStyle className="divform">
        <DivBackground>
          <DivContHistory>
            <Titulo>Historico juego</Titulo>
            <Button onClick={() => navigate("/questions")}>
              Volver a jugar
            </Button>
            <Button>De vuelta a casa</Button>
            <TableSty striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre de usuario</th>
                  <th>Historico monedas ganadas</th>
                  <th>Total ganado</th>
                </tr>
              </thead>
              <tbody>
                {historyPlay.map((p) => (
                  <tr key={p.id}>
                    <Field>{p.user}</Field>
                    <Field>{`$ ${p.historicoWon}  `}</Field>
                    <Field>$ {p.acumuladoTotal}</Field>
                  </tr>
                ))}
              </tbody>
            </TableSty>
          </DivContHistory>
        </DivBackground>
      </FormStyle>
    </DivForm>
  );
};

export default HistoryPlay;
