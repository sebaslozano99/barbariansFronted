import { useQuery } from "@tanstack/react-query"
import { getAllBarbers } from "../../services/users"
import BarberCard from "../../components/BarberCard";
import Spinner from "../../components/Spinner";


export default function Barbers() {

  const { data, isPending } = useQuery({
    queryKey: ["barbers-list"],
    queryFn: getAllBarbers
  });


  if(isPending) return <main className="flex flex-col justify-center items-center p-10 w-full h-screen bg-gray-50">
    <Spinner size={17} />
  </main>

  return (
    <main  className="flex flex-col gap-10 p-4 w-full min-h-screen bg-gray-50" >

      <h2 className="text-center text-5xl" >- BARBERSHOPS LIST -</h2>

      <section className="grid grid-cols-3 grid-rows-[30em] gap-5 mx-auto w-[90%]" >
        {
          data.map((barbershop) => (
            <BarberCard key={barbershop.barbershop_id} barbershop={barbershop} />
          ))
        }
      </section>
    </main>
  )
}
