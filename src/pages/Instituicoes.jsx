import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import BotaoVoltar from "../components/BotaoVoltar";


export default function Instituicoes() {
  const [instituicoes, setInstituicoes] = useState([]);

  useEffect(() => {
  async function buscarInstituicoes() {
    const { data, error } = await supabase
      .from("instituicoes")
      .select("*");

    if (error) {
      console.error(error);
      return;
    }

    setInstituicoes(data || []);
  }

  buscarInstituicoes();
}, []);

  return (
    <div className="container">
      <BotaoVoltar />
      <h1>Instituições</h1>

      {instituicoes.map((inst) => (
        <div className="card" key={inst.id}>
  <h3>🏠 {inst.nome}</h3>

  <p>
    <strong>Telefone:</strong>
    <br />
    {inst.telefone}
  </p>

  <p>
    <strong>Endereço:</strong>
    <br />
    {inst.endereco}
  </p>
</div>
      ))}
    </div>

    
  );
}