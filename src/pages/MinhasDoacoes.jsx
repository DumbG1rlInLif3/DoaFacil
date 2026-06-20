import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import BotaoVoltar from "../components/BotaoVoltar";

export default function MinhasDoacoes() {
  const [doacoes, setDoacoes] = useState([]);

  async function carregarDoacoes() {
    const { data, error } = await supabase
      .from("doacoes")
      .select("*");

    if (error) {
      console.error(error);
      return;
    }

    setDoacoes(data || []);
  }

  useEffect(() => {
  async function buscarDados() {
    const { data, error } = await supabase
      .from("doacoes")
      .select("*");

    if (!error) {
      setDoacoes(data || []);
    }
  }

  buscarDados();
}, []);

  async function marcarComoEntregue(id) {
    const { error } = await supabase
      .from("doacoes")
      .update({
        status: "Entregue",
      })
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    carregarDoacoes();
  }

  return (
    <div className="container">
      <BotaoVoltar />
      <h1>Minhas Doações</h1>

      {doacoes.map((doacao) => (
        <div className="card" key={doacao.id}>
          <h3>📦 {doacao.titulo}</h3>

          <p>{doacao.descricao}</p>

          <p>
            <strong>Categoria:</strong> {doacao.categoria}
          </p>

          <p>
            <strong>Status:</strong> {doacao.status}
          </p>

          {doacao.status !== "Entregue" && (
            <button
              onClick={() =>
                marcarComoEntregue(doacao.id)
              }
            >
              Marcar como Entregue
            </button>
          )}
        </div>
      ))}
    </div>
  );
}