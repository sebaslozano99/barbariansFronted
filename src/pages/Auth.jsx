import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <main className="flex justify-center items-center w-full h-[90vh] bg-gray-50">
      <Outlet />
    </main>
  )
}
