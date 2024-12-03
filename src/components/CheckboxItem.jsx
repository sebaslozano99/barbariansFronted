import PropTypes from "prop-types";


export default function CheckboxItem({children, value}) {
  return (
    <div className="flex items-center gap-2 mx-2" >
      <label htmlFor={value} className="cursor-pointer" >{children}</label>
      <input 
        id={value}
        name={value}
        type="checkbox"
        value={value}
        className="cursor-pointer"
      />
    </div>
  )
}


CheckboxItem.propTypes = {
  children: PropTypes.string,
  value: PropTypes.string,
}