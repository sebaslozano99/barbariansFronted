import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export default function Auth() {

  const { isAuthenticated, isLoading } = useUserContext();


  if(isLoading) return <h1>Loading...</h1>

  if(isAuthenticated) return <Navigate to="/" replace />

  return (
    <main className="flex justify-center items-center w-full h-[90vh] bg-gray-50">
      <Outlet />
    </main>
  )
}
