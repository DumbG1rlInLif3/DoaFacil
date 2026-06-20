import { useNavigate } from "react-router-dom";

export default function BotaoVoltar() {
  const navigate = useNavigate();

  return (
    <button
      className="btn-voltar"
      onClick={() => navigate(-1)}
    >
      ← Voltar
    </button>
  );
}