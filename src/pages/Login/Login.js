import Logo from "../../assets/images/TrackIt.png";
import { Link } from "react-router-dom";
import {
  BotaoEntrar,
  InputEmail,
  InputSenha,
  LoginBody,
  LogoImg,
  TextoParaCadastrar,
} from "./styledLogin";

export default function Login() {
  return (
    <LoginBody>
      <LogoImg src={Logo} alt="Logo" />
      <InputEmail placeholder="email" />
      <InputSenha placeholder="senha" />
      <BotaoEntrar>Entrar</BotaoEntrar>
      <Link to="/cadastro">
        <TextoParaCadastrar>Não tem uma conta? Cadastre-se!</TextoParaCadastrar>
      </Link>
    </LoginBody>
  );
}
