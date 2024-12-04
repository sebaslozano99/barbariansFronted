import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";


export default function NavbarLink({path, children}) {
  return (
    <li>
      <NavLink to={path} >{children}</NavLink>
    </li>
  )
}


NavbarLink.propTypes = {
  path: PropTypes.string,
  children: PropTypes.string,
}