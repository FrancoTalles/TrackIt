import GlobalStyle from "./constants/globalStyles";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Habitos from "./pages/Habitos/Habitos";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/habitos" element={<Habitos />}/>
      </Routes>
    </BrowserRouter>
  );
}
