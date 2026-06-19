// import { useState } from "react";
// import { useEffect } from "react";
// import { supabase } from "../services/supabase";

import { useEffect } from "react";
import { supabase } from "../services/supabase";

export default function Cadastro() {
  useEffect(() => {
    async function teste() {
      const { data, error } = await supabase
        .from("instituicoes")
        .select("*");

      console.log("Dados:", data);
      console.log("Erro:", error);
    }

    teste();
  }, []);

  return (
    <div>
      <h1>Cadastro</h1>
      <p>Teste de conexão com Supabase.</p>
    </div>
  );
}
// export default function Cadastro() {
//   const [nome, setNome] = useState("");
//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");

//   async function cadastrar() {
//     const { error } = await supabase
//       .from("usuarios")
//       .insert([
//         {
//           nome,
//           email,
//           senha,
//         },
//       ]);

//     if (!error) {
//       alert("Usuário cadastrado!");
//     }
//   }

//   return (
//     <div className="container">
//       <h2>Cadastro</h2>

//       <input
//         placeholder="Nome"
//         onChange={(e) =>
//           setNome(e.target.value)
//         }
//       />

//       <input
//         placeholder="Email"
//         onChange={(e) =>
//           setEmail(e.target.value)
//         }
//       />

//       <input
//         type="password"
//         placeholder="Senha"
//         onChange={(e) =>
//           setSenha(e.target.value)
//         }
//       />

//       <button onClick={cadastrar}>
//         Cadastrar
//       </button>
//     </div>
//   );
//}