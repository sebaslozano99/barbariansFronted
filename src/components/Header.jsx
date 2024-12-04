import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { IoLogOutOutline } from "react-icons/io5";
import Spinner from "../components/Spinner";
import useLogout from "../hooks/useLogout";
import NavbarLink from "./NavbarLink";




export default function Header() {

  const navigate = useNavigate();
  const { user, isAuthenticated, handleLogout } = useUserContext();
  const { mutate, isPending } = useLogout(navigate, handleLogout);

  
  return (
    <header className={`sticky top-0 z-50 flex items-center justify-between px-20 text-white w-full h-[10vh] bg-[#252525] backdrop-blur-sm transition-all ease-in-out duration-500`} >

      <h1 className="font-bold text-3xl" >
        <Link to="/" >Barbarians</Link>
      </h1>

      <nav>

        <ul className="flex items-center gap-10 text-lg" >
        {
          user?.role === "user" || !user ?
          <>
            <NavbarLink path="/" >Home</NavbarLink>
            <NavbarLink path="/barbers" >Barbers</NavbarLink>
            <NavbarLink path="/about" >About</NavbarLink>
            <NavbarLink path="/contact" >Contact</NavbarLink>

            { !isAuthenticated ?
              <NavbarLink path="/auth/login" >Log in</NavbarLink>
              :
              <button
              onClick={mutate}
            >
              { isPending ? <Spinner /> : <IoLogOutOutline size={25} />}
            </button>
            
            }
          </>

          :

          <>
            <NavbarLink path="/barbershop-dashboard" >Dashboard</NavbarLink>
            <NavbarLink path="/barbershop-profile" >Profile</NavbarLink>
            <NavbarLink path="/barbershop-appointments" >Appointments</NavbarLink>
            <NavbarLink path="/barbershop-reviews" >Reviews</NavbarLink>

            <button
              onClick={mutate}
            >
              { isPending ? <Spinner /> : <IoLogOutOutline size={25} />}
            </button>
          </>
        }
        </ul>

      </nav>
    </header>
  )
}
