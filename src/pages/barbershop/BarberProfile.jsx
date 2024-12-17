import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { IoHomeSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import useFetchBarberProfile from "../../hooks/useFetchBarberProfile";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import Button from "../../components/Button";
import LoadingPage from "../../components/LoadingPage";




export default function BarberProfile() {

  const { user } = useUserContext();
  const { data, isPending } = useFetchBarberProfile(user?.id);


  if(isPending) return <LoadingPage />


  if(!Object.keys(data).length) return <main className="flex flex-col justify-center items-center p-10 w-full h-screen bg-gray-50">
    <h2 className="text-7xl" >Set up your profile</h2>
    <Link to="/barbershop-profile/setup" className="px-4 py-1.5 text-center w-40 bg-yellow-500" >Set up barbershop</Link>
  </main>


  return (
    <main className="flex gap-20 p-10 w-full h-screen bg-gray-50">

      <ImageSlider images={data?.images} width="60%" height="80%"  />

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
            data.services?.map((service) => <p className="text-lg" key={service.service} >{service.service} - ${service.price}</p>)
          }
        </div>

        <div className="w-full flex justify-end" >
          <Button type="link" linkTo="/barbershop-profile/edit" paddingX={25} bgColor="#EAB308" textColor="black" >Edit Profile</Button>
        </div>

      </div>

    </main>
  )
}
