import { useQuery } from "@tanstack/react-query"
import { getSingleBarbershop } from "../../services/users"
import { useParams } from "react-router-dom"
import { IoHomeSharp } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosTime } from "react-icons/io";
import LoadingPage from "../../components/LoadingPage";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import phoneFormatter from "../../utils/phoneFormatter";




export default function SingleBarbershop() {

  const { barbershop_id } = useParams();

  const { data, isPending } = useQuery({
    queryKey: ["barbershop-id", barbershop_id],
    queryFn: () => getSingleBarbershop(barbershop_id),
    retry: 1
  });



  if(isPending) return <LoadingPage />

  return (
    <main className="p-8 w-full min-h-[95vh]">
      <section className="flex gap-4 w-full h-full" >
        <ImageSlider images={data.images} width="60%" height="80vh" />

        <div className="flex flex-col gap-10 p-4 w-[40%]" >
          <div>
            <h2 className="text-7xl" >{data.business_name}</h2>
            <p className="text-3xl" >{data.description}</p>
          </div>

          <div className="flex gap-20" >
            <div className="flex flex-col gap-3" >
              <p className="flex items-center gap-4 text-lg" > <IoHomeSharp size={25} /> {data.address} </p>
              <p className="flex items-center gap-4 text-lg" > <BsFillTelephoneFill size={25} /> {phoneFormatter(data.phone)} </p>
            </div>

            <div className="flex flex-col gap-3" >
              <p className="flex items-center gap-4 text-lg" > <IoTime size={25} /> {data.open_time} AM </p>
              <p className="flex items-center gap-4 text-lg" > <IoIosTime size={25} /> {data.close_time} PM </p>
            </div>
          </div>


          <div className="flex flex-col gap-5" >

            <h3 className="text-5xl" >SERVICES</h3>

            <div>
              {
                data.services?.map((service) => <p className="flex justify-between text-lg" key={service.service} > <span>{service.service}</span>  <span>${service.price}</span></p>)
              }
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
