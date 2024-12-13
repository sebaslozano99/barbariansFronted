import { useQuery } from "@tanstack/react-query"
import { getAllBarbers } from "../../services/users"
import { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import ImageSlider from "../../components/imageSlider/ImageSlider";


export default function Barbers() {

  const { data, isPending } = useQuery({
    queryKey: ["barbers-list"],
    queryFn: getAllBarbers
  });


  useEffect(() => {
    console.log(data);
  }, [data])


  if(isPending) return <h1>Loading...!</h1>

  return (
    <main  className="flex flex-col gap-10 p-4 w-full min-h-screen bg-gray-50" >
      <h2 className="text-center text-5xl" >- BARBERSHOPS LIST -</h2>

      <section className="grid grid-cols-3 grid-rows-[28em] gap-5 mx-auto w-[80%]" >
        {
          data.map((barbershop) => (
            <div 
              className="flex flex-col items-center gap-2 border-[1px] border-black/50"
              key={barbershop.barbershop_id} 
            >
              <ImageSlider height="50%" images={barbershop.images} />

              <div className="flex flex-col items-center w-full" >
                <h3 className="text-4xl mb-3" >{barbershop.business_name}</h3>
                <p className="flex gap-2 text-lg" > <FaLocationDot /> {barbershop.address}</p>
                <p className="flex gap-2 text-lg" > <FaPhoneAlt /> {barbershop.phone}</p>
              </div>

              <div className="flex flex-wrap justify-center" >
                {
                  barbershop?.services?.map((service) => <p className="mr-3" key={service.id} >#{service.service}</p>)
                }
              </div>
            </div>
          ))
        }
      </section>
    </main>
  )
}
