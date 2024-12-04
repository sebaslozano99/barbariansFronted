import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./context/UserContext";


// Pages

const Auth = lazy(() => import("./pages/Auth"));
const Homepage = lazy(() => import("./pages/Homepage"));
const About = lazy(() => import("./pages/About"));
const Contacts = lazy(() => import("./pages/Contacts"));
const NotFound = lazy(() => import("./pages/NotFound"));
import Admin from "./pages/barbershop/BarbershopContainer";
import EditBarbershop from "./pages/barbershop/EditBarbershop";
import BarberDashboard from "./pages/barbershop/BarberDashboard";
import BarberProfile from "./pages/barbershop/BarberProfile";


// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import LogInForm from "./components/LogInForm";
import SignupForm from "./components/SignupForm";
import BarberAppointments from "./pages/barbershop/BarberAppointments";
import BarberReviews from "./pages/barbershop/BarberReviews";



const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <UserProvider>
        <BrowserRouter>
          <Suspense fallback={ <h1>Loading...</h1> } >

            <Header />
            <Routes>
              <Route path="/" element={ <Homepage />  } />
              <Route path="/barbers" element={ <h1>Barbers</h1> } />
              <Route path="/about" element={ <About /> } />
              <Route path="/contact" element={ <Contacts /> } />
              <Route path="*" element={ <NotFound /> } />

              <Route element={ <Admin /> }>
                <Route path="/barbershop-dashboard" element={ <BarberDashboard /> } />
                <Route path="/barbershop-profile" element={ <BarberProfile /> } />
                <Route path="/barbershop-profile/edit" element={ <EditBarbershop /> } />
                <Route path="/barbershop-appointments" element={ <BarberAppointments /> } />
                <Route path="/barbershop-reviews" element={ <BarberReviews /> } />
              </Route>

              <Route path="/auth" element={ <Auth /> }>
                <Route index element={ <Navigate to="login" replace /> } />
                <Route path="/auth/login" element={ <LogInForm /> } />
                <Route path="/auth/signup" element={ <SignupForm /> } />
              </Route>

            </Routes>
            <Footer />
            
          </Suspense>
        </BrowserRouter>
      </UserProvider>
      <Toaster position="top-right" toastOptions={{ className: "bg-[#252525] text-white", duration: 2000}} />
    </QueryClientProvider>
  )
}
