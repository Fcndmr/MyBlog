import "./navbar.css"
import { Link, NavLink } from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link className="logo" to="/">BLOG</Link>
        <ul className="nav-links">
            <li><NavLink to="/">Ana Sayfa</NavLink></li>
            <li><NavLink to="/about">Hakkımızda</NavLink></li>
            <li><NavLink to="/contact">İletişim</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
