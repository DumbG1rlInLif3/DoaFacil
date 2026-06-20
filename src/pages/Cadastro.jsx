import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";
import BotaoVoltar from "../components/BotaoVoltar";
import logo from "../assets/logo-doaFacil.png";

export default function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function cadastrar(e) {
    e.preventDefault();

    const { error } = await supabase
      .from("usuarios")
      .insert([
        {
          nome,
          email,
          senha,
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Cadastro realizado com sucesso!");

    navigate("/");
  }

  return (
    <div className="container">
      <BotaoVoltar />
      <img src={logo} alt="DoaFácil" className="logo" />
      <div className="card">
        <h1>Cadastro</h1>

        <form onSubmit={cadastrar}>
          <input
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

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
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}