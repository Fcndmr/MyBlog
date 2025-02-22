import Card from "../components/card/Card";
import "./homepage.css";

function HomePage() {
  return (
    <>
      <div className="homepage-container">
        {/* Hero Bölümü */}
        <section className="hero">
          <h1>Hoş Geldiniz</h1>
          <p>
            Teknoloji, yazılım ve tasarım dünyasına dair en güncel içerikler
            burada!
          </p>
        </section>

        {/* Hakkımızda Bölümü */}
        <section className="about-section">
          <h2>Hakkımızda</h2>
          <p>
            Bu platform, yazılım geliştirme, UI/UX tasarımı ve teknoloji
            trendleri hakkında içerik sunmak için kuruldu.
          </p>
        </section>

        {/* Kartlar Bölümü */}
        <section className="cards-container">
          <Card
            image="https://picsum.photos/300"
            title="Projelerimiz"
            description="Son geliştirdiğimiz projeleri keşfedin!"
          />
          <Card
            image="https://picsum.photos/300"
            title="Son Blog Yazımız"
            description="Yeni teknolojiler hakkında bilgi edinin."
          />
          <Card
            image="https://picsum.photos/300"
            title="Referanslarımız"
            description="Bize güvenen markalara göz atın."
          />
        </section>

        {/* İletişim Bölümü */}
        <section className="contact-section">
          <h2>İletişime Geçin</h2>
          <p>Bize ulaşmak için aşağıdaki formu doldurabilirsiniz.</p>
          <form>
            <input type="text" placeholder="Adınız" required />
            <input type="email" placeholder="E-posta Adresiniz" required />
            <textarea placeholder="Mesajınız" required></textarea>
            <button type="submit">Gönder</button>
          </form>
        </section>
      </div>
    </>
  );
}

export default HomePage;
