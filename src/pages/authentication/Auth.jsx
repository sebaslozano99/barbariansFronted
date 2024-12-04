import { Outlet } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import InvalidAuthAccess from "./InvalidAuthAccess";

export default function Auth() {

  const { isAuthenticated, isLoading } = useUserContext();

  if(isLoading) return <h1>Loading...</h1>

  if(isAuthenticated) return <InvalidAuthAccess />

  return (
    <main className="flex justify-center items-center w-full h-[90vh] bg-gray-50">
      <Outlet />
    </main>
  )
}
