import { Link } from "react-router-dom";


export default function BarberProfile() {
  return (
    <main className="w-full h-screen bg-gray-50">
      Barbershop Profile

      <Link to="/barbershop-profile/edit" className="ml-10" >Edit Profile</Link>
    </main>
  )
}
