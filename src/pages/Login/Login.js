import Logo from "../../assets/images/TrackIt.png";
import { Link, useNavigate } from "react-router-dom";
import {
  BotaoEntrar,
  InputEmail,
  InputSenha,
  LoginBody,
  LogoImg,
  StyledForm,
  TextoParaCadastrar,
} from "./styledLogin";
import { useContext, useState } from "react";
import { Dna } from "react-loader-spinner";
import { URL } from "../../constants/colorInputs";
import axios from "axios";
import { AuthContext } from "../../contexts/auth";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [carregando, setCarregando] = useState(false);

  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function fazerLogin(event) {
    event.preventDefault();
    console.log("Carregando...");
    const promise = axios.post(`${URL}/auth/login`, form);
    setCarregando(true);

    promise.then((resposta) => {
      setCarregando(false);
      console.log("logado");
      setUser({
        email: resposta.data.email,
        id: resposta.data.id,
        image: resposta.data.image,
        name: resposta.data.name,
        token: resposta.data.token,
      });
      navigate("/hoje");
    });

    promise.catch((err) => {
      alert(err.response.data.message);
      setCarregando(false);
      setForm({ ...form, password: "" });
    });
  }

  return (
    <LoginBody>
      <LogoImg src={Logo} alt="Logo" />
      <StyledForm onSubmit={fazerLogin}>
        <InputEmail
          type="email"
          name="email"
          placeholder="email"
          required
          onChange={handleForm}
          value={form.email}
          disabled={carregando}
          data-identifier="input-email"
        />
        <InputSenha
          type="password"
          name="password"
          placeholder="senha"
          required
          onChange={handleForm}
          value={form.password}
          disabled={carregando}
          data-identifier="input-password"
        />
        <BotaoEntrar
          type="submit"
          disabled={carregando}
          data-identifier="login-btn"
        >
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
            "Entrar"
          )}
        </BotaoEntrar>
      </StyledForm>
      <Link to="/cadastro">
        <TextoParaCadastrar data-identifier="sign-up-action">
          Não tem uma conta? Cadastre-se!
        </TextoParaCadastrar>
      </Link>
    </LoginBody>
  );
}
