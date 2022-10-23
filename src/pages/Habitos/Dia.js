import styled from "styled-components";
import { clicado, fundoBotao, letrasBorda } from "../../constants/colorInputs";

export default function Dia(props) {
  const { dia, diaMarcado } = props;

  return <DiaDiv diaMarcado={diaMarcado}>{dia}</DiaDiv>
}

const DiaDiv = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid ${letrasBorda};
  border-radius: 5px;
  margin-right: 4px;
  color: ${letrasBorda};
  background-color: ${fundoBotao};
  background-color: ${props => props.diaMarcado ? clicado : fundoBotao};
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
