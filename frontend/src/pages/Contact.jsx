import "./contact.css";

function Contact() {
  return (
    <>
      <div className="contact-container">
        <h1>İletişim</h1>
        <p>Bizimle iletişime geçmek için aşağıdaki formu doldurabilirsiniz.</p>
        <form>
          <input type="text" placeholder="Adınız" required />
          <input type="email" placeholder="E-posta Adresiniz" required />
          <textarea placeholder="Mesajınız" required></textarea>
          <button type="submit">Gönder</button>
        </form>
        <div className="contact-info">
          <p>📧 Email: info@blog.com</p>
          <p>📞 Telefon: +90 555 555 55 55</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
