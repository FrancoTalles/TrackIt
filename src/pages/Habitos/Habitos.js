import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Fotter";
import {
  CadastroHabito,
  CancelaSalva,
  HabitoDiv,
  HabitosBody,
  InputHabito,
  Semana,
  SemanaDivs,
  TextoSemHabito,
  TituloBotao,
} from "./styledHabitos";
import { URL } from "../../constants/colorInputs";
import DiasDaSemana from "../../components/DiasDaSemana/DiasDaSemana";
import axios from "axios";
import { AuthContext } from "../../contexts/auth";

export default function Habitos() {
  const [cadastroAtivo, setCadastroAtivo] = useState(false);
  const [habitos, setHabitos] = useState([]);
  const [form, setForm] = useState({
    name: "",
    days: [],
  });
  const [days, setDays] = useState([]);
  const [carregando, setCarregando] = useState(false);

  const diasSemana = ["D", "S", "T", "Q", "Q", "S", "S"];

  const habitosTeste = [
    {
      id: 1,
      name: "Limpar a Casa",
      days: [1, 3, 5],
    },
  ];

  const {user} = useContext(AuthContext);

  const config = {
    headers: {
      "Authorization": `Bearer ${user.token}`
    }
  }

  function cadastrarHabito(event) {
    event.preventDefault();
    console.log("Cadastrando");
    const promise = axios.post(`${URL}/habits`, form, config);

    promise.then(resposta => console.log(resposta.data))

    promise.catch(err => console.log(err.response.data))
  }

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log({ ...form, [e.target.name]: e.target.value });
  }

  function adicionarDias(d) {
    const dias = days;
    if (dias.indexOf(d) === -1) {
      dias.push(d);
      dias.sort(function (a, b) {
        return a - b;
      });
      console.log(dias);
      setDays(dias);
      setForm({ ...form, days: dias });
    } else {
      let index = dias.indexOf(d);
      dias.splice(index, 1);
      dias.sort(function (a, b) {
        return a - b;
      });
      console.log(dias);
      setDays(dias);
      setForm({ ...form, days: dias });
    }
  }

  return (
    <HabitosBody>
      <Header />
      <TituloBotao>
        <p>Meus hábitos</p>
        <button onClick={() => setCadastroAtivo(!cadastroAtivo)}>+</button>
      </TituloBotao>
      {cadastroAtivo ? (
        <CadastroHabito>
          <form onSubmit={cadastrarHabito}>
            <InputHabito
              type="text"
              name="name"
              placeholder="nome do hábito"
              required
              onChange={handleForm}
              value={form.name}
            ></InputHabito>
            <Semana>
              {diasSemana.map((d, index) => (
                <DiasDaSemana
                  key={index}
                  index={index}
                  adicionarDias={adicionarDias}
                  dia={d}
                />
              ))}
            </Semana>
            <CancelaSalva>
              <p
                onClick={() => {
                  setCadastroAtivo(!cadastroAtivo);
                  setForm({
                    name: "",
                    days: [],
                  });
                  setDays([]);
                }}
              >
                Cancelar
              </p>
              <button type="submit">Salvar</button>
            </CancelaSalva>
          </form>
        </CadastroHabito>
      ) : (
        ""
      )}
      {habitosTeste.map((h) => (
        <HabitoDiv key={h.id}>
          <p>{h.name}</p>
          <SemanaDivs>
            <div>D</div>
            <div>S</div>
            <div>T</div>
            <div>Q</div>
            <div>Q</div>
            <div>S</div>
            <div>S</div>
          </SemanaDivs>
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

// const habitosTeste = [
//   {
//     id: 1,
//     name: "Limpar a Casa",
//     days: [1, 3, 5],
//   },
//   {
//     id: 2,
//     name: "Varrer a cama",
//     days: [1, 3, 4, 6],
//   },
//   {
//     id: 3,
//     name: "Jogar Lixo",
//     days: [1, 3, 5],
//   },
//   {
//     id: 4,
//     name: "Beber Agua",
//     days: [1, 3, 4, 6],
//   },{
//     id: 5,
//     name: "Fazer o projeto",
//     days: [1, 3, 5],
//   },
//   {
//     id: 6,
//     name: "Ir para a academia",
//     days: [1, 3, 4, 6],
//   },{
//     id: 7,
//     name: "Estudar",
//     days: [1, 3, 5],
//   },
//   {
//     id: 8,
//     name: "Dormir",
//     days: [1, 3, 4, 6],
//   },
//   {
//     id: 9,
//     name: "Sonhar",
//     days: [1, 3, 4, 6],
//   },
//   {
//     id: 10,
//     name: "Jogar",
//     days: [1, 3, 4, 6],
//   },
//   {
//     id: 11,
//     name: "Sarrar",
//     days: [1, 3, 4, 6],
//   }
// ];
