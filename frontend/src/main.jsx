import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './css/index.css'
import App from './App.jsx'
import { CardContextProvider } from './context/CardContext.jsx'
import { Layout } from "./layouts/Layout.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardContextProvider>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </CardContextProvider>
  </StrictMode>,
)
