import { useContext } from "react";
import Card from "../components/card/Card";
import "./homepage.css";
import { CardContext } from "../context/CardContext";

function HomePage() {
  const {cards, loading} = useContext(CardContext);
  if (loading) return <h2>Yükleniyor...</h2>;
  return (
    <>
      <div className="home-page">
      <div className="card-container">
        {cards.map(card => (
          <Card key={card._id} {...card} />
        ))}
      </div>
    </div>
    </>
  );
}

export default HomePage;
