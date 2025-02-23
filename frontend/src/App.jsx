import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import { Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Contact from "./pages/Contact"
import DetailsPage from "./pages/DetailsPage";
import './App.css'

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/details" element={<DetailsPage />} /> 
      </Routes>
      <Footer/>
    </>
  )
}

export default App
