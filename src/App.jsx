import { BrowserRouter, Route, Routes } from "react-router-dom";


// Pages
import Auth from "./pages/Auth";


// Components
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";



export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Homepage />  } />
        <Route path="/barbers" element={ <h1>Barbers</h1> } />
        <Route path="/about" element={ <h1>About Us</h1> } />
        <Route path="/contact" element={ <h1>Contact Us</h1> } />
        <Route path="/auth" element={ <Auth /> }>
          <Route path="/auth/login" element={ <h1>Log in</h1> } />
          <Route path="/auth/signup" element={ <h1>Sign up</h1> } />
        </Route>
        <Route path="*" element={ <h1>404 Not Found :C</h1> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
