import "../css/footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Tüm Hakları Saklıdır</p>
        <nav>
          <a href="#">Gizlilik Politikası</a> |{" "}
          <a href="#">Şartlar ve Koşullar</a>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
