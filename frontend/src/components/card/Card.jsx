import PropTypes from "prop-types";
import "./card.css";

function Card({ image, title, description }) {
  return (
    <>
      <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Detayları Gör</button>
    </div>
    </>
  );
}

export default Card;

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
