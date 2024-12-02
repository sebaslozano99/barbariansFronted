import { useCallback, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const scrollThresholdHome = 590;
const scrollThresholdAboutContact = 336;

export default function Header() {

  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(true);
  const [isRightpage, setIsRightPage] = useState(true);

  //if page is either Homepage, about or contact the header should be slightly transparent -- in homepage, contact and about pages the Header shouldn't have transparency at different scrollsY.

  const handleScroll = useCallback(() => {
    if((pathname === "/" && window.scrollY <= scrollThresholdHome) || (pathname === "/about" && window.scrollY <= scrollThresholdAboutContact) || (pathname === "/contact" && window.scrollY <= scrollThresholdAboutContact)) {
      setIsRightPage(true);
      setIsScrolled(true);
    }

    else{
      setIsRightPage(false);
      setIsScrolled(false);
    }
  }, [pathname]);

  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);



  return (
    <header className={`fixed top-0 z-50 flex items-center justify-between px-20 text-white w-full h-[10vh] ${isRightpage && isScrolled ? "bg-[#252525]/40" : "bg-[#252525]"} backdrop-blur-sm transition-all ease-in-out duration-500`} >
      <h1 className="font-bold text-3xl" >
        <Link to="/" >Barbarians</Link>
      </h1>

      <nav>
        <ul className="flex items-center gap-10 text-lg" >
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
            <NavLink to="/auth/login" className="text-yellow-500" >Log in</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
