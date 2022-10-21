import styled from "styled-components";
import { background, corHeader, grandesTextos } from "../../constants/colorInputs";

export const HistoricoBody = styled.div`
  background-color: ${background};
  width: 100%;
  height: 1000px;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HistoricoTitulo = styled.div`
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
    color: ${grandesTextos};
    margin-top: 17px;
  }
`;