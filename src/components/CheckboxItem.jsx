import PropTypes from "prop-types";


export default function CheckboxItem({idNameFor, value, handleCheckbox}) {
  return (
    <div className="flex items-center gap-2 mx-2" >
      <label htmlFor={idNameFor} className="cursor-pointer" >{value}</label>
      <input 
        id={idNameFor}
        name={idNameFor}
        type="checkbox"
        value={value}
        className="cursor-pointer"
        onChange={(e) => handleCheckbox(e)}
      />
    </div>
  )
}


CheckboxItem.propTypes = {
  idNameFor: PropTypes.string,
  value: PropTypes.string,
  handleCheckbox: PropTypes.func,
}