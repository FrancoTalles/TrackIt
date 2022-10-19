import styled from "styled-components"
import Logo from "../../assets/images/TrackIt.png"
import { BotaoEntrar, InputEmail, InputSenha, LoginBody, LogoImg, TextoCadastro } from "./styledLogin"

export default function Login (){
    return (
        <LoginBody>
            <LogoImg src={Logo} alt="Logo" />
            <InputEmail placeholder="email"/>
            <InputSenha placeholder="senha"/>
            <BotaoEntrar>Entrar</BotaoEntrar>
            <TextoCadastro>Não tem uma conta? Cadastre-se!</TextoCadastro>
        </LoginBody>
    )
}
