import "../css/about.css";

function About() {
  return (
    <>
      <div className="about-container">
        <h1>Hakkımızda</h1>
        <p>
          Merhaba! Bu blog, teknoloji, yazılım ve tasarım hakkında en güncel
          içerikleri paylaşmak için kuruldu. Amacımız, okuyucularımıza değerli
          bilgiler sunmak ve topluluk oluşturmak.
        </p>
        <div className="team">
          <div className="team-member">
            <img src="https://picsum.photos/150" alt="Kurucu" />
            <h3>John Doe</h3>
            <p>Kurucu & Editör</p>
          </div>
          <div className="team-member">
            <img src="https://picsum.photos/150" alt="Yazar" />
            <h3>Jane Smith</h3>
            <p>Yazar</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
