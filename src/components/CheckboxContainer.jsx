import CheckboxItem from "./CheckboxItem";
import PropTypes from "prop-types";



const services = [
  {
    service: "Classic Haircut",
    idNameFor: "classic-haircut"
  },
  {
    service: "Fade Haircut",
    idNameFor: "fade-haircut"
  },
  {
    service: "Buzz Cut",
    idNameFor: "buzz-cut"
  },
  {
    service: "Razor Cut",
    idNameFor: "razor-cut"
  },
  {
    service: "Textured Cut",
    idNameFor: "textured-cut"
  },
  {
    service: "Caesar Cut",
    idNameFor: "fade-haircut"
  },
  {
    service: "Undercut",
    idNameFor: "undercut"
  },
  {
    service: "Beard Trim",
    idNameFor: "beard-trim"
  },
  {
    service: "Beard Shaping",
    idNameFor: "beard-shaping"
  },
  {
    service: "Hot Towels Shave",
    idNameFor: "hot-towels-shave"
  },
  {
    service: "Beard Coloring",
    idNameFor: "beard-coloring"
  },
  {
    service: "Hair Repair Treatment",
    idNameFor: "hair-repair-treatment"
  },
  {
    service: "Nose and Ear Treatment",
    idNameFor: "nose-and-ear-treatment"
  },
  {
    service: "beard Shaping",
    idNameFor: "beard-shaping"
  }
]


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