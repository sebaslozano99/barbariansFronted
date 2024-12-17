import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./context/UserContext";


// Pages

// --- All user pages 
const Homepage = lazy(() => import("./pages/users/Homepage"));
const About = lazy(() => import("./pages/users/About"));
const Contacts = lazy(() => import("./pages/users/Contacts"));

// --- Not Foundpage
const NotFound = lazy(() => import("./pages/notFound/NotFound"));

// --- Authentication page container
const Auth = lazy(() => import("./pages/authentication/Auth"));

// --- Barbershop pages
const BarbershopContainer = lazy(() => import("./pages/barbershop/BarbershopContainer"));
const SetupBarbershop = lazy(() => import("./pages/barbershop/SetupBarbershop"));
const BarberDashboard = lazy(() => import("./pages/barbershop/BarberDashboard"));
const BarberProfile = lazy(() => import("./pages/barbershop/BarberProfile"));
const BarberAppointments = lazy(() => import("./pages/barbershop/BarberAppointments"));
const BarberReviews = lazy(() => import("./pages/barbershop/BarberReviews"));
const EditBarbershop = lazy(() => import("./pages/barbershop/EditBarbershop"));
const Barbers = lazy(() => import("./pages/users/Barbers"));


// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import LogInForm from "./components/LogInForm";
import SignupForm from "./components/SignupForm";
import LoadingPage from "./components/LoadingPage";
import SingleBarbershop from "./pages/users/SingleBarbershop";




const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <UserProvider>
        <BrowserRouter>
          <Suspense fallback={ <LoadingPage /> } >

            <Header />
            <Routes>

              <Route path="/" element={ <Homepage />  } />
              <Route path="/barbers" element={ <Barbers /> } />
              <Route path="/barbers/:barbershop_id" element={ <SingleBarbershop /> } />
              <Route path="/about" element={ <About /> } />
              <Route path="/contact" element={ <Contacts /> } />

              <Route element={ <BarbershopContainer /> }>
                <Route path="/barbershop-dashboard" element={ <BarberDashboard /> } />
                <Route path="/barbershop-profile" element={ <BarberProfile /> } />
                <Route path="/barbershop-profile/setup" element={ <SetupBarbershop /> } />
                <Route path="/barbershop-profile/edit" element={ <EditBarbershop /> } />
                <Route path="/barbershop-appointments" element={ <BarberAppointments /> } />
                <Route path="/barbershop-reviews" element={ <BarberReviews /> } />
              </Route>

              <Route path="/auth" element={ <Auth /> }>
                <Route index element={ <Navigate to="login" replace /> } />
                <Route path="/auth/login" element={ <LogInForm /> } />
                <Route path="/auth/signup" element={ <SignupForm /> } />
              </Route>

              <Route path="*" element={ <NotFound /> } />
            </Routes>
            <Footer />
            
          </Suspense>
        </BrowserRouter>
      </UserProvider>
      <Toaster position="top-right" toastOptions={{ className: "bg-[#252525] text-white", duration: 1000 }} />
    </QueryClientProvider>
  )
}
