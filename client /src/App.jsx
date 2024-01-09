import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/Home"
import { AuthConTextProvider } from "./context&routes/AuthContext"
import { PrivateRoutes } from "./context&routes/PrivateRoutes"
import {  Blogs } from "./pages/Blog"

function App() {
  

  return (
    <AuthConTextProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element= {<HomePage />} />
        <Route path = "/blogs" element = {
          <PrivateRoutes>
            <Blogs />
          </PrivateRoutes>
        } />
      </Routes>
    </BrowserRouter>
    </AuthConTextProvider>
  )
}

export default App
