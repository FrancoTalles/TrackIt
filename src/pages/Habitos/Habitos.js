import styled from "styled-components";
import Footer from "../../components/Footer/Fotter";
import Header from "../../components/Header/Header";
import { background, corHeader, corBotao } from "../../constants/colorInputs";

export default function Habitos() {
  return (
    <HabitosBody>
      <Header />
      <TituloBotao>
        <p>Meus hábitos</p>
        <div>+</div>
      </TituloBotao>
      <Footer />
    </HabitosBody>
  );
}

const HabitosBody = styled.div`
  background-color: ${background};
  height: 100%;
`
const TituloBotao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 92px;
  p{
    margin-left: 17px;
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: ${corHeader}
  }
  div{
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
    margin-right: 18px;
  }
`
