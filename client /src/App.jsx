import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/Home"
import { AuthConTextProvider } from "./context&routes/AuthContext"
import { PrivateRoutes } from "./context&routes/PrivateRoutes"
import { Blog } from "./pages/Blog"

function App() {

  return (
    <AuthConTextProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element= {<HomePage />} />
        <Route path = "/blogs" element = {
          <PrivateRoutes>
            <Blog />
          </PrivateRoutes>
        } />
      </Routes>
    </BrowserRouter>
    </AuthConTextProvider>
  )
}

export default App
