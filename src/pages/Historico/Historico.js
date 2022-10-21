import Footer from "../../components/Footer/Fotter";
import Header from "../../components/Header/Header";
import { HistoricoBody, HistoricoTitulo } from "./styledHistorico";


export default function Historico() {
  return (
    <HistoricoBody>
      <Header />
      <HistoricoTitulo>
        <h1>Histórico</h1>
        <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
      </HistoricoTitulo>
      <Footer />
    </HistoricoBody>
  );
}
