import Logo from "../../assets/images/TrackIt.png";
import { Link } from "react-router-dom";
import {
  BotaoCadastrar,
  CadastroBody,
  InputEmail,
  InputFoto,
  InputNome,
  InputSenha,
  LogoImg,
  TextoParaLogar,
} from "./styledCadastro";

export default function Cadastro() {
  return (
    <CadastroBody>
      <LogoImg src={Logo} alt="Logo" />
      <InputEmail placeholder="email" />
      <InputSenha placeholder="senha" />
      <InputNome placeholder="nome" />
      <InputFoto placeholder="foto" />
      <BotaoCadastrar>Cadastrar</BotaoCadastrar>
      <Link to="/">
        <TextoParaLogar>Já tem uma conta? Faça login!</TextoParaLogar>
      </Link>
    </CadastroBody>
  );
}
