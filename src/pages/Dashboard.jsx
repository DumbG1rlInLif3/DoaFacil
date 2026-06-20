import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-doaFacil.png";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="logo-area">
        <img src={logo} alt="DoaFácil" className="logo" />
        <h1>DoaFácil</h1>
        <p>Conectando solidariedade a quem precisa.</p>
      </div>

      <div
        className="card-menu"
        onClick={() => navigate("/nova-doacao")}
      >
        <h2>➕ Nova Doação</h2>
        <p>
          Cadastre roupas, alimentos, móveis e
          outros itens para doação.
        </p>
      </div>

      <div
        className="card-menu"
        onClick={() => navigate("/minhas-doacoes")}
      >
        <h2>📦 Minhas Doações</h2>
        <p>
          Consulte os itens cadastrados e acompanhe
          o status das doações.
        </p>
      </div>

      <div
        className="card-menu"
        onClick={() => navigate("/instituicoes")}
      >
        <h2>🏠 Instituições</h2>
        <p>
          Conheça as instituições cadastradas e seus
          contatos.
        </p>
      </div>

      <div
        className="card-menu"
        onClick={() => navigate("/perfil")}
      >
        <h2>👤 Perfil</h2>
        <p>
          Visualize seus dados cadastrados.
        </p>
      </div>
    </div>
  );
}