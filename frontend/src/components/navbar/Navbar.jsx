import "../css/navbar.css"
import { Link, NavLink } from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link className="logo" to="/">BLOG</Link>
        <ul className="nav-links">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Ana Sayfa</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>Hakkımızda</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>İletişim</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
