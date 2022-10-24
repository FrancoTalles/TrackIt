import styled from "styled-components";
import {
  background,
  corHeader,
  fundoBotao,
  textoSecundario,
  grandesTextos,
  corCheckBoxCinza,
  corCheckBoxVerde,
  corCheckBoxBorda,
} from "../../constants/colorInputs";

export const HojeBody = styled.div`
  background-color: ${background};
  width: 100%;
  height: 1000px;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DiaAtual = styled.div`
  margin-top: 28px;
  width: 90.66%;
  h1 {
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: ${corHeader};
  }
  h2 {
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: ${textoSecundario};
    margin-top: 5px;
  }
`;

export const HabitosHojeDiv = styled.div`
  width: 90.66%;
  height: 94px;
  margin-top: 19px;
  background-color: ${fundoBotao};
  border-radius: 5px;
  border: 1px solid ${fundoBotao};
  position: relative;
`;

export const TituloSequencia = styled.div`
  margin-left: 19px;
  margin-top: 10px;
  h1 {
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: ${grandesTextos};
  }
  p:nth-child(2) {
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: ${grandesTextos};
    margin-top: 7px;
    span {
      color: ${(props) => (props.feita ? corCheckBoxVerde : grandesTextos)};
    }
  }
  p:last-child {
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: ${grandesTextos};
    span {
      color: ${(props) =>
        props.igual && props.feita ? corCheckBoxVerde : grandesTextos};
    }
  }
`;

export const Checkbox = styled.div`
  position: absolute;
  background-color: ${(props) =>
    props.feita ? corCheckBoxVerde : corCheckBoxCinza};
  top: 13px;
  right: 13px;
  width: 69px;
  height: 69px;
  border-radius: 5px;
  border: 1px solid ${corCheckBoxBorda};
  display: flex;
  justify-content: center;
  align-items: center;
  ion-icon {
    color: ${fundoBotao};
    font-size: 50px;
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
