import Card from "../components/card/Card";
import "./homepage.css";

function HomePage() {
  const cards = [
    {
      image: "https://picsum.photos/300/200",
      title: "Başlık 1",
      description: "Bu, birinci kartın açıklamasıdır.",
    },
    {
      image: "https://picsum.photos/300/201",
      title: "Başlık 2",
      description: "Bu, ikinci kartın açıklamasıdır.",
    },
    {
      image: "https://picsum.photos/300/202",
      title: "Başlık 3",
      description: "Bu, üçüncü kartın açıklamasıdır.",
    },
  ];
  return (
    <>
      <div className="home-page">
      <h1>Ana Sayfa</h1>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
    </>
  );
}

export default HomePage;
