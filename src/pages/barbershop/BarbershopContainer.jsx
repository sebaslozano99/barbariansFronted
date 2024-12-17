import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import LoadingPage from "../../components/LoadingPage";


export default function BarbershopContainer() {
 
  const { user, isAuthenticated, isValidatingToken } = useUserContext();

  if(isValidatingToken) return <LoadingPage />

  if(user?.role === "user" || !isAuthenticated) return <Navigate to="/" replace />


  return (
    <main className="flex justify-center items-center w-full bg-gray-50">
      <Outlet />
    </main>
  )
}
