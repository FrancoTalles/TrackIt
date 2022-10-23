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
import { ThreeDots } from "react-loader-spinner";
import Dia from "./Dia";

export default function Habitos() {
  const [cadastroAtivo, setCadastroAtivo] = useState(false);
  const [habitos, setHabitos] = useState([]);
  const [form, setForm] = useState({
    name: "",
    days: [],
  });
  const [days, setDays] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [atualizar, setAtualizar] = useState(false);

  const diasSemana = ["D", "S", "T", "Q", "Q", "S", "S"];

  const { user } = useContext(AuthContext);

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  function cadastrarHabito(event) {
    event.preventDefault();
    console.log("Cadastrando");
    const promise = axios.post(`${URL}/habits`, form, config);
    setCarregando(true);

    promise.then((resposta) => {
      console.log(resposta.data);
      setCadastroAtivo(!cadastroAtivo);
      setAtualizar(!atualizar);
      setCarregando(false);
      setForm({
        name: "",
        days: [],
      });
      setDays([]);
    });

    promise.catch((err) => {
      alert(err.response.data.message);
      setCadastroAtivo(!cadastroAtivo);
      setAtualizar(!atualizar);
      setCarregando(false);
      setForm({
        name: "",
        days: [],
      });
      setDays([]);
    });
  }

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function adicionarDias(d) {
    const dias = days;
    if (dias.indexOf(d) === -1) {
      dias.push(d);
      dias.sort(function (a, b) {
        return a - b;
      });
      setDays(dias);
      setForm({ ...form, days: dias });
    } else {
      let index = dias.indexOf(d);
      dias.splice(index, 1);
      dias.sort(function (a, b) {
        return a - b;
      });
      setDays(dias);
      setForm({ ...form, days: dias });
    }
  }

  function excluirHabito(id) {
    const confirmacao = window.confirm("Quer mesmo excluir esse habito?");
    if (confirmacao === true) {
      console.log("Excluindo");
      const promise = axios.delete(`${URL}/habits/${id}`, config);

      promise.then((resposta) => {
        setAtualizar(!atualizar);
      });

      promise.catch((err) => console.log(err.response.data.message));
    } else {
      console.log("Nao excluiu");
    }
  }

  function montarSemana() {}

  useEffect(() => {
    const promise = axios.get(`${URL}/habits`, config);

    promise.then((resposta) => {
      console.log(resposta.data);
      setHabitos(resposta.data);
    });

    promise.catch((err) => console.log(err.response.data.message));
  }, [atualizar]);

  return (
    <HabitosBody controle={habitos.length}>
      <Header />
      <TituloBotao>
        <p>Meus hábitos</p>
        <button
          onClick={() => {
            setCadastroAtivo(!cadastroAtivo);
            setDays([]);
          }}
        >
          +
        </button>
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
              disabled={carregando}
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
            <CancelaSalva carregando={carregando}>
              <p
                onClick={() => {
                  setCadastroAtivo(!cadastroAtivo);
                  setAtualizar(!atualizar);
                  setDays([]);
                }}
              >
                Cancelar
              </p>
              <button disabled={carregando} type="submit">
                {carregando ? (
                  <ThreeDots
                    height="20"
                    width="60"
                    radius="9"
                    color="#ffffff"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />
                ) : (
                  "Salvar"
                )}
              </button>
            </CancelaSalva>
          </form>
        </CadastroHabito>
      ) : (
        ""
      )}
      {habitos.length !== 0 ? (
        habitos.map((h) => (
          <HabitoDiv key={h.id}>
            <p>{h.name}</p>
            <SemanaDivs>
              <Dia diaMarcado={h.days.indexOf(0) !== -1} dia="D" />
              <Dia diaMarcado={h.days.indexOf(1) !== -1} dia="S" />
              <Dia diaMarcado={h.days.indexOf(2) !== -1} dia="T" />
              <Dia diaMarcado={h.days.indexOf(3) !== -1} dia="Q" />
              <Dia diaMarcado={h.days.indexOf(4) !== -1} dia="Q" />
              <Dia diaMarcado={h.days.indexOf(5) !== -1} dia="S" />
              <Dia diaMarcado={h.days.indexOf(6) !== -1} dia="S" />
            </SemanaDivs>
            <ion-icon
              onClick={() => excluirHabito(h.id)}
              name="trash-outline"
            ></ion-icon>
          </HabitoDiv>
        ))
      ) : (
        <TextoSemHabito>
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        </TextoSemHabito>
      )}
      <Footer />
    </HabitosBody>
  );
}
