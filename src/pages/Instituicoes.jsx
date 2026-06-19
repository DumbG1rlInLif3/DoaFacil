import { useEffect } from "react";
import { supabase } from "../services/supabase";

export default function Instituicoes() {
  useEffect(() => {
    async function carregar() {
      const { data, error } = await supabase
        .from("instituicoes")
        .select("*");

      console.log("Dados:", data);
      console.log("Erro:", error);
      console.dir(error);
    }

    carregar();
  }, []);

  return <h1>Instituições</h1>;
}