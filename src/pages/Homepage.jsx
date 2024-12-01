import { Link } from "react-router-dom";



export default function Homepage() {
  return (
    <main className="" >

      <section className={`flex flex-col justify-center items-center p-4 w-full h-[105vh] bg-[url("/barbershopOne.jpg")] bg-cover`} >
        <h2 className="text-9xl text-yellow-500" >BARBERIANS.COM</h2>
        <p className="text-4xl text-white" >Discover the Best Barbers Near You – Anytime, Anywhere</p>
        <Link to="/barbers" className="px-8 py-3 mt-6 font-medium text-2xl bg-yellow-500" >Find your barber now</Link>
      </section>


      <section className={`flex p-4 w-full h-[90vh]`} >

        <div className="flex flex-col justify-center items-center gap-10 p-10 w-[45%] h-full" >
          <h2 className="text-6xl font-semibold" >Search, Find, Review, Schedule and Rate!</h2>
          <p className="text-lg" > you can say goodbye to wandering around or making endless calls. We bring everything you need to find, evaluate, and book the right barbershop—all in one place.

          Whether you&apos;re looking for a haircut in your neighborhood or exploring new barbershops in a different city, <strong className="text-xl" >BARBARIANS</strong> is here to help you look your best with convenience and ease.</p>
        </div>

        <div className="flex justify-center items-center gap-10 p-10 h-full" >
          <img src="/scissors.jpg" alt="scissors-background" className="h-full" />
          <img src="/barbershopTwo.jpg" alt="scissors-background" className="h-full" />
        </div>

      </section>


      <section className="p-4 w-full h-[90vh]" >
        <h2 className="text-6xl font-semibold text-center" >BARBARIANS SERVICES</h2>

        <div className="grid grid-cols-4 gap-3 p-4 w-full h-[90%]" >

          <div className="flex flex-col h-full border-[1px] border-black/50" >
            <img src="/barberOne.jpg" alt="barberOne" className="h-[310px] bg-cover" />

            <div className="flex flex-col gap-2 p-2" >
              <h3 className="text-2xl font-semibold text-center" >SAVE TIME</h3>
              <p className="text-center" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt numquam doloremque, facilis culpa voluptate voluptatibus repellat.</p>
            </div>
          </div>

          <div className="flex flex-col h-full border-[1px] border-black/50" >
            <img src="/barberTwo.jpg" alt="barberTwo" className="h-[310px]" />

            <div className="flex flex-col gap-2 p-2" >
              <h3 className="text-2xl font-semibold text-center" >FIND THE BEST BARBERS</h3>
              <p className="text-center" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt numquam doloremque, facilis culpa voluptate voluptatibus repellat.</p>
            </div>
          </div>

          <div className="flex flex-col h-full border-[1px] border-black/50" >
            <img src="/barberThree.jpg" alt="barberThree" className="h-[310px] bg-cover" />

            <div className="flex flex-col gap-2 p-2" >
              <h3 className="text-2xl font-semibold text-center" >SET YOUR APPOINTMENTS</h3>
              <p className="text-center" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt numquam doloremque, facilis culpa voluptate voluptatibus repellat.</p>
            </div>
          </div>

          <div className="flex flex-col h-full border-[1px] border-black/50" >
            <img src="/scissorsThree.jpg" alt="scissorsThree" className="h-[310px] bg-contain" />

            <div className="flex flex-col gap-2 p-2" >
              <h3 className="text-2xl font-semibold text-center" >SECURE PAYMENTS</h3>
              <p className="text-center" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt numquam doloremque, facilis culpa voluptate voluptatibus repellat.</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
