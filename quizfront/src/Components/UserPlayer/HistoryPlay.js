import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestData } from "../../Helpers/Data/requestData";
import { urlHistoryPlay } from "../../Helpers/Data/urls";
import {
  ButtonHome,
  ContainBtnsHis,
  DivContHistory,
  Field,
  TableSty,
} from "../../Styles/StyleHistoryGame";
import { DivBackground } from "../../Styles/StyleHome";
import { DivForm, FormStyle, Titulo } from "../../Styles/StyleQuestion";

const HistoryPlay = () => {
  const [history, setHistory] = useState({
    historyPlay: [],
  });

  const { historyPlay } = history;

  const navigate = useNavigate();

  useEffect(() => {
    getAllHistoryPlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <ContainBtnsHis>
              <ButtonHome className="btn" onClick={() => navigate("/")}>
                De vuelta a casa
              </ButtonHome>
            </ContainBtnsHis>
            <TableSty striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre de usuario</th>
                  <th>Historico monedas ganadas</th>
                  <th>Total ganado</th>
                </tr>
              </thead>
              <tbody>
                {historyPlay.length <= 10 ? (
                  historyPlay.map((p) => (
                    <tr key={p.id}>
                      <Field>{p.user}</Field>
                      <Field>{`$ ${p.historicoWon}`}</Field>
                      <Field>$ {p.acumuladoTotal}</Field>
                    </tr>
                  ))
                ) : (
                  <td>0</td>
                )}
              </tbody>
            </TableSty>
          </DivContHistory>
        </DivBackground>
      </FormStyle>
    </DivForm>
  );
};

export default HistoryPlay;
