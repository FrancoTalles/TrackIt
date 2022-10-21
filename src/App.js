import { BrowserRouter, Routes, Route} from "react-router-dom"
import GlobalStyle from "./constants/globalStyles";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro"
import Habitos from "./pages/Habitos/Habitos";
import Hoje from "./pages/Hoje/Hoje";
import Historico from "./pages/Historico/Historico";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/habitos" element={<Habitos />}/>
        <Route path="/hoje" element={<Hoje />}/>
        <Route path="/historico" element={<Historico />}/>
      </Routes>
    </BrowserRouter>
  );
}
