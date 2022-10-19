import styled from "styled-components";
import { letrasBorda, fundoBotao, corBotao } from "../../constants/colorInputs";

export const CadastroBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 180px;
  height: 178px;
  margin-top: 68px;
`;
export const InputEmail = styled.input`
  width: 80.8%;
  height: 45px;
  background-color: ${fundoBotao};
  border: 1px solid ${letrasBorda};
  border-radius: 5px;
  margin-top: 32px;
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

export const InputNome = styled(InputSenha)``;

export const InputFoto = styled(InputSenha)``;

export const BotaoCadastrar = styled.button`
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
`;

export const TextoParaLogar = styled.h1`
  margin-top: 25px;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${corBotao};
  text-decoration-line: underline;
`;