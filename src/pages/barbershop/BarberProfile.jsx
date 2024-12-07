import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { IoHomeSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import useFetchBarberProfile from "../../hooks/useFetchBarberProfile";




export default function BarberProfile() {

  const { user } = useUserContext();
  const { data, isPending } = useFetchBarberProfile(user);


  if(isPending) return <h1>Loading...!</h1>


  return (
    <main className="flex gap-20 p-10 w-full h-screen bg-gray-50">

      <div className="flex items-center justify-center w-[60%] h-[85%] overflow-hidden rounded-lg" >
        <img 
          src={`http://localhost:5000/${data.images[1].image_path}`} 
          alt={data.images[0].image_path} 
          className=" h-full w-full bg-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-8 p-1 w-[40%] h-[85%] overflow-y-auto profile" >
        <div>
          <h2 className="text-7xl font-bold " >{data.business_name}</h2>
          <p className="text-2xl" >{data.description}</p>
        </div>

        <div  >
          <h3 className="text-4xl font-bold mb-3" >Barbershop&apos;s information: </h3>
          <p className="flex items-center gap-4 text-lg" > <IoHomeSharp />{data.address} </p>
          <p className="flex items-center gap-4 text-lg" > <BsFillTelephoneFill /> {data.phone}  </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold mb-3" >Work Hours: </h3>
          <p className="text-lg" >Open time: {data.open_time} AM</p>
          <p className="text-lg" >Close time: {data.close_time} PM</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold mb-3" >Services & Prices:  </h3>
          {
            data.services.map((service) => <p className="text-lg" key={service.service} >{service.service} - ${service.price}</p>)
          }
        </div>

        <div className="w-full flex justify-end" >
          <Link 
            to="/barbershop-profile/edit" 
            className="py-1.5 px-5 text-xl w-auto bg-yellow-500" 
          >
            Edit Profile
          </Link>
        </div>

      </div>

    </main>
  )
}
