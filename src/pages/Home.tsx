import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <button className="button" onClick={() => navigate("/about")}>
        Ir para a outra página
      </button>
    </div>
  );
}
