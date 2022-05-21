import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { requestData } from "../../Helpers/Data/requestData";
import { urlHistoryPlay } from "../../Helpers/Data/urls";
import { sendHistoryAward } from "../../Helpers/History/getLocalHistory";
import { DivForm, FormStyle } from "../../Styles/StyleQuestion";

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
        <h3>Historico juego</h3>
        <Button onClick={() => navigate("/questions")}>Volver a jugar</Button>
        <Button>De vuelta a casa</Button>
        <Table striped bordered hover>
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
                <td>{p.user}</td>
                <td>{`$ ${p.historicoWon}  `}</td>
                <td>$ {p.acumuladoTotal}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </FormStyle>
    </DivForm>
  );
};

export default HistoryPlay;
