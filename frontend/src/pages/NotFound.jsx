import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Üzgünüz, aradığınız sayfa bulunamadı!</h2>
      <button onClick={() => navigate("/")}>Ana Sayfaya Dön</button>
    </div>
  );
}

export default NotFound;
