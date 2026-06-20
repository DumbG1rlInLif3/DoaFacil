import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo-doaFacil.png";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function entrar(e) {
    e.preventDefault();

    if (!email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    navigate("/dashboard");
  }

  return (
    <div className="container">
      <img src={Logo} alt="DoaFácil" className="logo" />
      <div className="card">
        <h1>DoaFácil</h1>
        <p>Faça a diferença através da doação.</p>

        <form onSubmit={entrar}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit">
            Entrar
          </button>
        </form>

        <p>
          Não possui conta?
          <Link to="/cadastro"> Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}