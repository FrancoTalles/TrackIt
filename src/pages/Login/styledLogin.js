import styled from "styled-components";
import { letrasBorda, fundoBotao, corBotao, grandesTextos, background } from "../../constants/colorInputs";

export const LoginBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 180px;
  height: 178px;
  margin-top: 68px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80.8%;
`;

export const InputEmail = styled.input`
  width: 100%;
  height: 45px;
  background-color: ${props => props.disabled ? background : fundoBotao};
  border: 1px solid ${letrasBorda};
  border-radius: 5px;
  margin-top: 32px;
  padding-left: 11px;
  color: ${grandesTextos};
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  &::placeholder {
    color: ${letrasBorda};
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
  }
`;

export const InputSenha = styled(InputEmail)`
  margin-top: 6px;
`;

export const BotaoEntrar = styled.button`
  width: 80.8%;
  height: 45px;
  color: ${fundoBotao};
  background-color: ${corBotao};
  border: 1px solid ${corBotao};
  border-radius: 5px;
  margin-top: 6px;
  font-family: "Lexend Deca", sans-serif;
  font-size: 21px;
  line-height: 26px;
  font-weight: 400;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${props => props.disabled ? "initial" : "pointer"};
  filter: opacity(${props => props.disabled ? "60%" : "100%"});
`;

export const TextoParaCadastrar = styled.h1`
  margin-top: 25px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${corBotao};
  text-decoration-line: underline;
`;
