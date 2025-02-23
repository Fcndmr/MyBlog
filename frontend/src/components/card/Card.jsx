import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Sayfa yönlendirme için
import "./card.css";

function Card({ image, title, description }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/details", { state: { image, title, description } }); // Kart bilgilerini taşıyoruz
  };

  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleClick}>Detayları Gör</button>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
