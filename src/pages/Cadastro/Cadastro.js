import Logo from "../../assets/images/TrackIt.png";
import { Link, useNavigate } from "react-router-dom";
import {
  BotaoCadastrar,
  CadastroBody,
  InputEmail,
  InputFoto,
  InputNome,
  InputSenha,
  LogoImg,
  StyledForm,
  TextoParaLogar,
} from "./styledCadastro";
import { useState } from "react";
import axios from "axios";
import { URL } from "../../constants/colorInputs";
import { Dna } from "react-loader-spinner";

export default function Cadastro() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();

  function handleform(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log({ ...form, [e.target.name]: e.target.value });
  }

  function fazerCadastro(event) {
    event.preventDefault();
    console.log("ENVIANDO...");
    const promise = axios.post(`${URL}/auth/sign-up`, form);
    setCarregando(true);

    promise.then((resposta) => {
      navigate("/");
      setCarregando(false);
      console.log(resposta);
    });

    promise.catch((err) => {
      alert(err.response.data.message);
      setCarregando(false);
      setForm({
        email: "",
        name: "",
        image: "",
        password: "",
      })
    });
  }

  return (
    <CadastroBody>
      <LogoImg src={Logo} alt="Logo" />
      <StyledForm onSubmit={fazerCadastro}>
        <InputEmail
          type="email"
          name="email"
          placeholder="email"
          required
          onChange={handleform}
          value={form.email}
          disabled={carregando}
        />
        <InputSenha
          type="password"
          name="password"
          placeholder="senha"
          required
          onChange={handleform}
          value={form.password}
          disabled={carregando}
        />
        <InputNome
          type="text"
          name="name"
          placeholder="nome"
          required
          onChange={handleform}
          value={form.name}
          disabled={carregando}
        />
        <InputFoto
          type="url"
          name="image"
          placeholder="foto"
          required
          onChange={handleform}
          value={form.image}
          disabled={carregando}
        />
        <BotaoCadastrar type="submit" disabled={carregando}>
          {carregando ? (
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          ) : (
            "Cadastrar"
          )}
        </BotaoCadastrar>
      </StyledForm>
      <Link to="/">
        <TextoParaLogar>Já tem uma conta? Faça login!</TextoParaLogar>
      </Link>
    </CadastroBody>
  );
}
