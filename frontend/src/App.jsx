import { Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Contact from "./pages/Contact"
import DetailsPage from "./pages/DetailsPage";
import CardList from "./pages/Admin/Card/CardList"
import CreateCard from "./pages/Admin/Card/CreateCard"
import UpdateCard from "./pages/Admin/Card/UpdateCard"
import NotFound from "./pages/NotFound";
import './css/App.css'

function App() {
  
  return (
    <> 
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin/*">
          <Route index element={<CardList/>}/>
          <Route path="card" element={<CardList/>}/>
          <Route path="card/create" element={<CreateCard/>}/>
          <Route path="card/update/:id" element={<UpdateCard/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
