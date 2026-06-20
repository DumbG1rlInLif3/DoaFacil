import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import BotaoVoltar from "../components/BotaoVoltar";

export default function Perfil() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function carregarUsuarios() {
      const { data, error } = await supabase
        .from("usuarios")
        .select("*");

      if (!error) {
        setUsuarios(data);
      }
    }

    carregarUsuarios();
  }, []);

  return (
    <div className="container">
      <BotaoVoltar />
      <h1>Perfil</h1>

      {usuarios.map((usuario) => (
        <div className="card" key={usuario.id}>
  <h3>👤 {usuario.nome}</h3>

  <p>
    <strong>E-mail:</strong>
    <br />
    {usuario.email}
  </p>
</div>
      ))}
    </div>
  );
}