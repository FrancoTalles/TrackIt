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

  const { user, porcentagem, setPorcentagem } = useContext(AuthContext);

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  const habitosDone = habitosToday.filter((i) => i.done !== false);
  console.log(habitosDone);

  const calculo = (habitosDone.length / habitosToday.length) * 100;
  console.log(habitosDone.length);
  console.log(habitosToday.length);
  console.log(calculo);

  useEffect(() => {
    const habitosDone = habitosToday.filter((i) => i.done !== false);
    console.log(habitosDone);

    const calculo = (habitosDone.length / habitosToday.length) * 100;
    console.log(habitosDone.length);
    console.log(habitosToday.length);
    console.log(calculo);
    setPorcentagem(calculo);

    const promise = axios.get(`${URL}/habits/today`, config);

    promise.then((resposta) => {
      console.log(resposta.data);
      setHabitosToday(resposta.data);
    });

    promise.catch((err) => console.log(err.response.data));
  }, [controle]);

  function fazerCheck(estaFeito, idHabito) {
    if (estaFeito === true) {
      const promise = axios.post(
        `${URL}/habits/${idHabito}/uncheck`,
        {},
        config
      );

      promise.then((resposta) => {
        console.log(resposta.data);
        setControle(!controle);
      });

      promise.catch((err) => console.log(err.response.data));
    } else if (estaFeito === false) {
      const promise = axios.post(`${URL}/habits/${idHabito}/check`, {}, config);

      promise.then((resposta) => {
        console.log(resposta.data);
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
        <h1>{hoje}</h1>
        <h2>
          {calculo !== Number && calculo === 0
            ? "Nenhum hábito concluído ainda"
            : `${calculo}% dos hábitos concluídos`}
        </h2>
      </DiaAtual>
      {habitosToday.length !== 0 ? (
        habitosToday.map((h) => (
          <HabitosHojeDiv key={h.id} onClick={() => fazerCheck(h.done, h.id)}>
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
            <Checkbox feita={h.done}>
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
