import { useState } from "react";
import { supabase } from "../services/supabase";
import { useNavigate } from "react-router-dom";
import BotaoVoltar from "../components/BotaoVoltar";

export default function NovaDoacao() {
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");

  async function salvarDoacao() {
    const { error } = await supabase
      .from("doacoes")
      .insert([
        {
          titulo,
          categoria,
          descricao,
          status: "Disponível",
          usuario_id: "e25f25c4-a14d-477b-ab18-fcf8fb014b4d"
        }
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Doação cadastrada com sucesso!");
    navigate("/minhas-doacoes");
  }

  return (
    <div className="container">
      <BotaoVoltar />
      <h1>Nova Doação</h1>

      <input
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <input
        placeholder="Categoria"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      />

      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <button onClick={salvarDoacao}>
        Salvar
      </button>
    </div>
  );
}