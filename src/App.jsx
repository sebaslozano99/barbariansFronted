import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


// Pages

const Auth = lazy(() => import("./pages/Auth"));
const Homepage = lazy(() => import("./pages/Homepage"));
const About = lazy(() => import("./pages/About"));
const Contacts = lazy(() => import("./pages//Contacts"));


// Components
import Header from "./components/Header";
import Footer from "./components/Footer";



export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={ <h1>Loading...</h1> } >
        <Header />
        <Routes>
          <Route path="/" element={ <Homepage />  } />
          <Route path="/barbers" element={ <h1>Barbers</h1> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/contact" element={ <Contacts /> } />
          <Route path="*" element={ <h1>404 Not Found :C</h1> } />

          <Route path="/auth" element={ <Auth /> }>
            <Route path="/auth/login" element={ <h1>Log in</h1> } />
            <Route path="/auth/signup" element={ <h1>Sign up</h1> } />
          </Route>
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  )
}
