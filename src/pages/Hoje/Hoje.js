import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Fotter";
import { Checkbox, DiaAtual, HabitosHojeDiv, HojeBody, TituloSequencia } from "./styledHoje";

export default function Hoje() {
  const TesteHabitosHoje = [
    {
      id: 3,
      name: "Acordar",
      done: true,
      currentSequence: 1,
      highestSequence: 5,
    },
    {
      id: 4,
      name: "Fazer Projeto",
      done: false,
      currentSequence: 2,
      highestSequence: 4,
    },
    {
      id: 5,
      name: "Dormir",
      done: true,
      currentSequence: 3,
      highestSequence: 3,
    },
  ];

  return (
    <HojeBody>
      <Header />
      <DiaAtual>
        <h1>Segunda, 17/05</h1>
        <h2>Nenhum hábito concluído ainda</h2>
      </DiaAtual>
      {TesteHabitosHoje.map((h) => (
        <HabitosHojeDiv key={h.id}>
          <TituloSequencia>
            <h1>{h.name}</h1>
            <p>Sequência atual: {h.currentSequence} dias</p>
            <p>Seu recorde: {h.highestSequence} dias</p>
          </TituloSequencia>
          <Checkbox feita={h.done}>
            <ion-icon name="checkmark-outline"></ion-icon>
          </Checkbox>
        </HabitosHojeDiv>
      ))}
      <Footer />
    </HojeBody>
  );
}