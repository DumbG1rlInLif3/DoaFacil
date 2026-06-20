// testeSupabase.js
import { supabase } from "./services/supabase";

export async function testarSupabase() {
  const { data, error } = await supabase
    .from("instituicoes")
    .select("*");

  console.log(data);
  console.log(error);
  
  console.log(import.meta.env.VITE_SUPABASE_URL);
}