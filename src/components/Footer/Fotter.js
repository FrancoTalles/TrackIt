import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { corBotao, fundoBotao } from "../../constants/colorInputs";
import { AuthContext } from "../../contexts/auth";

export default function Footer() {

  const navigate = useNavigate();

  const { porcentagem } = useContext(AuthContext);

  function irParaLogin (){
    navigate("/hoje")
  }
  return (
    <>
      <Rodape>
        <Link to="/habitos"><p>Hábitos</p></Link>
        <Link to="/historico"><p>Histórico</p></Link>
      </Rodape>
      <Barra onClick={irParaLogin}>{porcentagem}</Barra>
    </>
  );
}

const Rodape = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: ${fundoBotao};
  display: flex;
  justify-content: space-between;
  align-items: center;
  a{
    text-decoration-line: none;
  }
  p:first-child {
    color: ${corBotao};
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin-left: 36px;
  }
  p:last-child {
    color: ${corBotao};
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin-right: 31px;
  }
`;

const Barra = styled.div`
    width: 91px;
    height: 91px;
    background-color: ${corBotao};
    position: fixed;
    z-index:2;
    bottom: 10px;
    left: calc(50% - 45.5px);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${fundoBotao};
    font-family: "Lexend Deca", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
`