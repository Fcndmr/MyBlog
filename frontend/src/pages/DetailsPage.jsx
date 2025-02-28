import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../css/DetailsPage.css"

function DetailsPage() {
  const { id } = useParams();
  const location = useLocation(); 
  const navigate = useNavigate();
  const { img, title, description } = location.state || {}; 

  if (!img || !title || !description) {
    return <h2>Veri bulunamadı!</h2>;
  }

  return (
    <div className="details-page">
      <h2>ID: {id}</h2>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => navigate(-1)}>Geri Dön</button> 
    </div>
  );
}

export default DetailsPage;
