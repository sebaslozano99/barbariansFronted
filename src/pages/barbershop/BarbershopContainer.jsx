import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

export default function BarbershopContainer() {
 
  const { user, isAuthenticated, isValidatingToken } = useUserContext();

  if(isValidatingToken) return <h1>Loading...!</h1>

  if(user?.role === "user" || !isAuthenticated) return <Navigate to="/" replace />


  return (
    <main className="flex justify-center items-center w-full bg-gray-50">
      <Outlet />
    </main>
  )
}
