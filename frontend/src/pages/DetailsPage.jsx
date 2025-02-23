import { useLocation, useNavigate } from "react-router-dom";

function DetailsPage() {
  const location = useLocation(); // Kart bilgilerini alıyoruz
  const navigate = useNavigate();
  const { image, title, description } = location.state || {}; // Gelen verileri çıkartıyoruz

  if (!image || !title || !description) {
    return <h2>Veri bulunamadı!</h2>;
  }

  return (
    <div className="details-page">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => navigate(-1)}>Geri Dön</button> {/* Geri butonu */}
    </div>
  );
}

export default DetailsPage;
