import styled from "styled-components";
import {
  background,
  corHeader,
  corBotao,
  grandesTextos,
  letrasBorda,
  fundoBotao,
} from "../../constants/colorInputs";

export const HabitosBody = styled.div`
  background-color: ${background};
  width: 100%;
  height: 1000px;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TituloBotao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90.66%;
  margin-top: 22px;
  margin-bottom: 10px;
  p {
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: ${corHeader};
  }
  button {
    width: 40px;
    height: 35px;
    background-color: ${corBotao};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 27px;
    line-height: 34px;
    border-radius: 5px;
    border: 1px solid ${corBotao};
  }
`;

export const TextoSemHabito = styled.div`
  width: 100%;
  height: 74px;
  margin-top: 28px;
  p {
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    line-height: 22px;
    color: ${grandesTextos};
    margin-left: 17px;
    margin-right: 20px;
  }
`;

export const CadastroHabito = styled.div`
  width: 90.66%;
  background-color: ${fundoBotao};
  margin-top: 17px;
  border-radius: 5px;
`;

export const InputHabito = styled.input`
  width: 89.11%;
  height: 45px;
  margin: 18px 18px 0px 19px;
  border: 1px solid ${letrasBorda};
  border-radius: 5px;
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

export const Semana = styled.div`
  margin-top: 8px;
  margin-left: 19px;
  button {
    width: 30px;
    height: 30px;
    border: 1px solid ${letrasBorda};
    border-radius: 5px;
    margin-right: 4px;
    color: ${letrasBorda};
    background-color: ${fundoBotao};
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    cursor: pointer;
  }
`;

export const CancelaSalva = styled.div`
  margin-top: 29px;
  display: flex;
  justify-content: right;
  margin-right: 16px;
  margin-bottom: 15px;
  align-items: center;
  p {
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${corBotao};
    margin-right: 23px;
  }
  button {
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${fundoBotao};
    background-color: ${corBotao};
    border: 1px solid ${corBotao};
    border-radius: 5px;
  }
`;

export const HabitoDiv = styled.div`
  background-color: ${fundoBotao};
  width: 90.66%;
  height: 91px;
  margin-top: 10px;
  border: 1px solid ${fundoBotao};
  border-radius: 5px;
  position: relative;
  p {
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    margin-left: 19px;
    margin-top: 10px;
    color: ${grandesTextos};
  }
  div{
    margin-top: 10px;
  }
  ion-icon{
    position: absolute;
    right: 7px;
    top: 7px;
    font-size: 20px;
    color: ${grandesTextos};
  }
`;
