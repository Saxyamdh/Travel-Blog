import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/Home"
import { AuthConTextProvider } from "./context&routes/AuthContext"
import { PrivateRoutes } from "./context&routes/PrivateRoutes"
import {  Blogs } from "./pages/Blog"
import { Login } from "./pages/AuthPage"
import { Register } from "./components/authComponents/Register"

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
        <Route path = "/auth">
            <Route path = "login" element ={ <Login />} />
            <Route path="register" element ={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthConTextProvider>
  )
}

export default App
