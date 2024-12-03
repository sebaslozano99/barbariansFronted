import { Outlet } from "react-router-dom";


export default function Admin() {
  return (
    <main className="flex justify-center items-center w-full bg-gray-50">
      <Outlet />
    </main>
  )
}
