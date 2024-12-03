import PropTypes from "prop-types";


export default function Spinner({size = 1}) {
  return (
    <div 
        className={`border-2 border-t-gray-600 border-r-gray-600 rounded-full animate-spin`} 
        style={{width: `${size}em`, height: `${size}em`}}
    >
      
    </div>
  )
}


Spinner.propTypes = {
    size: PropTypes.number
}