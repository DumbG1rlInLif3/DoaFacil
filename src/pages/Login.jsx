import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>DoaFácil</h1>

      <input
        type="email"
        placeholder="E-mail"
      />

      <input
        type="password"
        placeholder="Senha"
      />

      <button
        onClick={() => navigate("/dashboard")}
      >
        Entrar
      </button>

      <p
        onClick={() => navigate("/cadastro")}
      >
        Criar conta
      </p>
    </div>
  );
}