import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login"; 
// ./ indica que o arquivo está na mesma pasta, enquantp ../ indica que o arquvioestá em uma pasta acima
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import NovaDoacao from "./pages/NovaDoacao";
import MinhasDoacoes from "./pages/MinhasDoacoes";
import Instituicoes from "./pages/Instituicoes";
import Perfil from "./pages/Perfil";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/nova-doacao" element={<NovaDoacao />} />
        <Route path="/minhas-doacoes" element={<MinhasDoacoes />} />
        <Route path="/instituicoes" element={<Instituicoes />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
