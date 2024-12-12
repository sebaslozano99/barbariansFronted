import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export default function Button({
  type = "", 
  linkTo, 
  paddingY = 5, 
  paddingX = 2, 
  bgColor = "#252525", 
  textColor = "#fff",
  click, 
  // classname,
  children

}) {

  if(type === "link") return <Link 
    to={linkTo}
    className={`flex justify-center items-center`}
    style={{padding: `${paddingY}px ${paddingX}px`, backgroundColor: `${bgColor}`, color: textColor}}
  >
    {children}
  </Link>


  return (

    <button 
      className=""
      style={{padding: `${paddingY}px ${paddingX}px`, backgroundColor: `${bgColor}`, color: textColor}}
      onClick={click}
    >
      {children}
    </button>
  )
}


Button.propTypes = {
  type: PropTypes.string,
  linkTo: PropTypes.string,
  paddingY: PropTypes.number,
  paddingX: PropTypes.number,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  // classname: PropTypes.string,
  click: PropTypes.func,
  children: PropTypes.node,
}