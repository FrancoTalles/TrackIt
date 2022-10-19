import { useState } from "react";
import Footer from "../../components/Footer/Fotter";
import Header from "../../components/Header/Header";
import {
  CadastroHabito,
  CancelaSalva,
  HabitosBody,
  InputHabito,
  Semana,
  TextoSemHabito,
  TituloBotao,
} from "./styledHabitos";

export default function Habitos() {
  const [cadastroAtivo, setCadastroAtivo] = useState(false);
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
      <TextoSemHabito>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </TextoSemHabito>
      <Footer />
    </HabitosBody>
  );
}
