import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Fotter";
import {
  Checkbox,
  DiaAtual,
  HabitosHojeDiv,
  HojeBody,
  TextoSemHabito,
  TituloSequencia,
} from "./styledHoje";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/auth";
import { URL } from "../../constants/colorInputs";

export default function Hoje() {
  const [habitosToday, setHabitosToday] = useState([]);
  const [controle, setControle] = useState(false);

  const { user, setPorcentagem } = useContext(AuthContext);

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  const habitosDone = habitosToday.filter((i) => i.done !== false);

  let calculo = 0;
  if (habitosDone.length === 0 || habitosToday.length === 0) {
    calculo = 0;
  } else {
    calculo = (habitosDone.length / habitosToday.length) * 100;
    calculo = Math.round(calculo);
  }
  teste();

  useEffect(() => {
    const promise = axios.get(`${URL}/habits/today`, config);

    promise.then((resposta) => {
      setHabitosToday(resposta.data);
    });

    promise.catch((err) => alert(err.response.data.message));
  }, [controle]);

  function teste() {
    setPorcentagem(calculo);
  }

  function fazerCheck(estaFeito, idHabito) {
    teste();
    if (estaFeito === true) {
      const promise = axios.post(
        `${URL}/habits/${idHabito}/uncheck`,
        {},
        config
      );

      promise.then((resposta) => {
        setControle(!controle);
      });

      promise.catch((err) => console.log(err.response.data));
    } else if (estaFeito === false) {
      const promise = axios.post(`${URL}/habits/${idHabito}/check`, {}, config);

      promise.then((resposta) => {
        setControle(!controle);
      });

      promise.catch((err) => console.log(err.response.data));
    }
  }

  let customParseFormat = require("dayjs/plugin/customParseFormat");
  dayjs.extend(customParseFormat);
  require("dayjs/locale/pt-br");
  let today = dayjs().locale("pt-br").format("dddd, DD/MM");
  let hoje = today[0].toUpperCase() + today.substring(1);

  return (
    <HojeBody>
      <Header />
      <DiaAtual>
        <h1 data-identifier="today-infos">{hoje}</h1>
        <h2 data-identifier="today-infos">
          {isNaN(calculo) || calculo === 0
            ? "Nenhum hábito concluído ainda"
            : `${calculo}% dos hábitos concluídos`}
        </h2>
      </DiaAtual>
      {habitosToday.length !== 0 ? (
        habitosToday.map((h) => (
          <HabitosHojeDiv key={h.id} data-identifier="today-infos">
            <TituloSequencia
              feita={h.done}
              igual={h.currentSequence === h.highestSequence}
            >
              <h1>{h.name}</h1>
              <p>
                Sequência atual: <span>{h.currentSequence} dias</span>
              </p>
              <p>
                Seu recorde: <span>{h.highestSequence} dias</span>
              </p>
            </TituloSequencia>
            <Checkbox
              feita={h.done}
              onClick={() => fazerCheck(h.done, h.id)}
              data-identifier="done-habit-btn"
            >
              <ion-icon name="checkmark-outline"></ion-icon>
            </Checkbox>
          </HabitosHojeDiv>
        ))
      ) : (
        <TextoSemHabito>
          <p>
            Você não tem nenhum hábito cadastrado para hoje. Adicione um hábito
            na aba Hábitos para começar a trackear!
          </p>
        </TextoSemHabito>
      )}
      <Footer />
    </HojeBody>
  );
}
