import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>DoaFácil</h1>

      <button
        onClick={() =>
          navigate("/nova-doacao")
        }
      >
        Nova Doação
      </button>

      <button
        onClick={() =>
          navigate("/minhas-doacoes")
        }
      >
        Minhas Doações
      </button>

      <button
        onClick={() =>
          navigate("/instituicoes")
        }
      >
        Instituições
      </button>

      <button
        onClick={() =>
          navigate("/perfil")
        }
      >
        Perfil
      </button>
    </div>
  );
}