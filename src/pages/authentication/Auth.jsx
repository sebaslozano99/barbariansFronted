import { Outlet } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import InvalidAuthAccess from "./InvalidAuthAccess";
import LoadingPage from "../../components/LoadingPage";

export default function Auth() {

  const { isAuthenticated, isLoading } = useUserContext();

  if(isLoading) return <LoadingPage />

  if(isAuthenticated) return <InvalidAuthAccess />

  return (
    <main className="flex justify-center items-center w-full h-[90vh] bg-gray-50">
      <Outlet />
    </main>
  )
}
