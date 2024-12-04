import { services } from "../data/barbershopServices";
import CheckboxItem from "./CheckboxItem";
import PropTypes from "prop-types";


export default function CheckboxContainer({handleCheckbox}) {
  return (
    <div className="flex items-center justify-between gap-4 mt-5 0 px-2 w-auto" >
      <h2 >Services</h2>

      <div className="flex items-center flex-wrap gap-3 w-[90%]" >
        {
          services.map((service) => <CheckboxItem key={service.service} value={service.service} idNameFor={service.idNameFor} handleCheckbox={handleCheckbox}  />)
        }
      </div>

    </div>
  )
}


CheckboxContainer.propTypes = {
  handleCheckbox: PropTypes.func
}