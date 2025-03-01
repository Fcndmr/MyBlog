import { useContext, useState } from "react";
import Card from "../components/card/Card";
import "../css/homepage.css";
import { CardContext } from "../context/CardContext";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState(""); // Arama sorgusu
  const { cards, loadings } = useContext(CardContext);

  if (loadings) return <h2>Yükleniyor...</h2>;

  // Arama fonksiyonu (arama kelimesini içeren kartları filtreler)
  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="home-page">
        {/* Arama Formu */}
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Arama yap..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button" type="submit">
            Ara
          </button>
        </form>

        {/* Kartlar */}
        <div className="card-container">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => <Card key={card._id} {...card} />)
          ) : (
            <p className="no-results">Sonuç bulunamadı</p>
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
