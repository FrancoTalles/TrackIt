import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Fotter";
import {
  CadastroHabito,
  CancelaSalva,
  HabitoDiv,
  HabitosBody,
  InputHabito,
  Semana,
  TextoSemHabito,
  TituloBotao,
} from "./styledHabitos";

export default function Habitos() {
  const [cadastroAtivo, setCadastroAtivo] = useState(false);
  const [habitos, setHabitos] = useState(false);

  const habitosTeste = [
    {
      id: 1,
      name: "Limpar a Casa",
      days: [1, 3, 5],
    },
    {
      id: 2,
      name: "Varrer a cama",
      days: [1, 3, 4, 6],
    },
    {
      id: 3,
      name: "Jogar Lixo",
      days: [1, 3, 5],
    },
    {
      id: 4,
      name: "Beber Agua",
      days: [1, 3, 4, 6],
    },{
      id: 5,
      name: "Fazer o projeto",
      days: [1, 3, 5],
    },
    {
      id: 6,
      name: "Ir para a academia",
      days: [1, 3, 4, 6],
    },{
      id: 7,
      name: "Estudar",
      days: [1, 3, 5],
    },
    {
      id: 8,
      name: "Dormir",
      days: [1, 3, 4, 6],
    },
  ];

  return (
    <HabitosBody>
      <Header />
      <TituloBotao>
        <p>Meus hábitos</p>
        <button onClick={() => setCadastroAtivo(!cadastroAtivo)}>+</button>
      </TituloBotao>
      {cadastroAtivo ? (
        <CadastroHabito>
          <InputHabito placeholder="nome do hábito"></InputHabito>
          <Semana>
            <button>D</button>
            <button>S</button>
            <button>T</button>
            <button>Q</button>
            <button>Q</button>
            <button>S</button>
            <button>S</button>
          </Semana>
          <CancelaSalva>
            <p onClick={() => setCadastroAtivo(!cadastroAtivo)}>Cancelar</p>
            <button>Salvar</button>
          </CancelaSalva>
        </CadastroHabito>
      ) : (
        ""
      )}
      {habitosTeste.map((h) => (
        <HabitoDiv key={h.id}>
          <p>{h.name}</p>
          <Semana>
            <button>D</button>
            <button>S</button>
            <button>T</button>
            <button>Q</button>
            <button>Q</button>
            <button>S</button>
            <button>S</button>
          </Semana>
          <ion-icon name="trash-outline"></ion-icon>
        </HabitoDiv>
      ))}
      {habitos ? (
        <TextoSemHabito>
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        </TextoSemHabito>
      ) : (
        ""
      )}
      <Footer />
    </HabitosBody>
  );
}
