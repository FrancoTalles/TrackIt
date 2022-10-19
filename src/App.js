import GlobalStyle from "./constants/globalStyles";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro"
import { BrowserRouter, Routes, Route} from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
      </Routes>
    </BrowserRouter>
  );
}
