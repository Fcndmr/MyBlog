import PropTypes from "prop-types"
import Color from "../components/color/Color"
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"


function SiteLayout({children}) {
  return (
    <>
      <Navbar/>
        {children}
      <Color/>
      <Footer/>
    </>
  )
}

export default SiteLayout

SiteLayout.propTypes = {
    children : PropTypes.node
}