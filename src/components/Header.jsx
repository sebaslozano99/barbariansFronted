import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const scrollThreshold = 575;

export default function Header() {

  const { pathname } = useLocation();
  const [scroll, setScroll] = useState(false);
  const [isHomepage, setIsHomepage] = useState(false);



  const handleScroll =() => {
    if(window.scrollY >= scrollThreshold) setScroll(true);
    else setScroll(false);
  };



  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);



  useEffect(() => {
    if(pathname !== "/") setIsHomepage(true);
    else setIsHomepage(false);
  }, [pathname])



  return (
    <header className={`fixed top-0 z-50 flex items-center justify-between px-20 text-white w-full h-[10vh] ${scroll || isHomepage ? "bg-[#252525]" : "bg-[#252525]/40"} backdrop-blur-sm transition-all ease-in-out duration-500`} >
      <h1 className="font-bold text-3xl" >
        <Link to="/" >Barbarians</Link>
      </h1>

      <nav>
        <ul className="flex items-center gap-10" >
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
          <li>
            <NavLink to="/auth/login" >Log in</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
