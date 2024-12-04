import { Link, NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { IoLogOutOutline } from "react-icons/io5";
import Spinner from "../components/Spinner";
import useLogout from "../hooks/useLogout";




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
              <li>
                <NavLink to="/" >Home</NavLink>
              </li>

              <li>
                <NavLink to="/barbers">Barbers</NavLink>
              </li>

              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact" >Contact</NavLink>
              </li>

              { !isAuthenticated ?
                <li>
                  <NavLink to="/auth/login" className="text-yellow-500" >Log in</NavLink>
                </li>
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
              <li>
                <NavLink to="/barbershop-dashboard" >Dashboard</NavLink>
              </li>

              <li>
                <NavLink to="/barbershop-profile">Profile</NavLink>
              </li>

              <li>
                <NavLink to="/barbershop-appointments">Appointments</NavLink>
              </li>

              <li>
                <NavLink to="/barbershop-reviews" >Reviews</NavLink>
              </li>

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
