import "./card.css";

function Card() {
  return (
    <>
      <div className="card">
        <img src="https://picsum.photos/300/200" alt="" />
        <div className="card-content">
          <h2 className="card-title">Başlık</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cum.
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
