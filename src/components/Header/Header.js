import styled from "styled-components"
import { corHeader, fundoBotao } from "../../constants/colorInputs"

export default function Header (){
    return (
        <Topo>
            <h1>TrackIt</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSREXLRo6oH-OoCDNP5cslz7xAt6EJPtE5KPjP8ZJ-9Q&s" alt="Foto" />
        </Topo>
    )
}

const Topo = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${corHeader};
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    h1{
        font-family: 'Playball', cursive;
        color: ${fundoBotao};
        font-weight: 400;
        font-size: 39px;
        line-height: 49px;
        margin: 10px 0px 11px 18px;
    }
    img{
        width: 51px;
        height: 51px;
        border-radius: 50px;
        margin: 9px 18px 10px;
    }
`