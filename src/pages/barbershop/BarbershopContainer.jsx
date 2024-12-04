import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { useEffect } from "react";


export default function BarbershopContainer() {
 
  const { user, isAuthenticated, isLoading } = useUserContext();

  useEffect(() => {
    console.log("authenticated: ", isAuthenticated);
    console.log("isLoading: ", isLoading);
  }, [isAuthenticated, isLoading])

  if(isLoading) return <h1>Loading...!</h1>

  if(!isAuthenticated && !isLoading) return <Navigate to="/auth/login" replace />

  if(!isLoading && isAuthenticated && user?.role !== "barbershop") return <Navigate to="/" replace />

  return (
    <main className="flex justify-center items-center w-full bg-gray-50">
      <Outlet />
    </main>
  )
}
