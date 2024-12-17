import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import ImageSlider from "./imageSlider/ImageSlider";
import Button from "../components/Button";
import phoneFormatter from "../utils/phoneFormatter";



export default function BarberCard({barbershop}) {

  const { barbershop_id, images, services, business_name, address, phone } = barbershop;

  return (
    <div 
      className="flex flex-col items-center gap-3 border-[1px] border-black/50"
    >
      <ImageSlider height="50%" images={images} borderRadius={0} />

      <div className="flex flex-col w-full px-4" >
        <h3 className="text-5xl mb-3" >{business_name}</h3>
        <p className="flex gap-2 text-lg" > <FaLocationDot /> {address}</p>
        <p className="flex gap-2 text-lg" > <FaPhoneAlt /> {phoneFormatter(phone)}</p>
      </div>

      <div className="flex flex-wrap px-4" >
        {
          services?.map((service) => <p className="mr-3" key={service} >#{service}</p>)
        }
      </div>

      <div className="flex justify-end w-11/12" >
        <Button paddingX={15} bgColor="#EAB308" textColor="#000" type="link" linkTo={`/barbers/${barbershop_id}`} >Details</Button>
      </div>
    </div>
  )
}


BarberCard.propTypes = {
  barbershop: PropTypes.object
}