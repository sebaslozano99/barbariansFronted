

export default function About() {
  return (
    <main className="w-full min-h-screen">
      <div className={`flex justify-center items-center w-full h-[25em] bg-[linear-gradient(45deg,rgba(36,90,97,.5),rgba(0,19,34,.5)),url("/scissorsTwo.jpg")] bg-cover`} >
        <h2 className="text-white text-7xl font-bold" >ABOUT US</h2>
      </div>

      <section className="flex justify-center items-center gap-16 p-4 w-full h-[90vh] " >
        <img src="/barbershop.jpg" alt="barbershop" className="w-[500px] rounded-3xl" loading="lazy" />

        <div className="w-1/2" >
          <h2 className="text-6xl" >Who are We?</h2>
          <p className="text-lg mt-2" >Welcome to <strong className="font-bold" >BARBARIANS</strong> , the Colombian online platform designed to connect barbershops with customers and help both grow their businesses. Our mission is to provide an easy and efficient way for barbershops to showcase their services, attract new clients, and increase their revenue, while giving customers a seamless experience in finding and booking quality grooming services.</p>
        </div>
      </section>


      <section className="flex justify-center items-center gap-16 px-24 w-full h-[90vh] " >

        <div className="w-1/2" >
          <h2 className="text-6xl text-end" >OUR VISION</h2>
          <p className="text-lg text-end mt-2" >At <strong className="font-bold" >BARBARIANS</strong>, we strive to empower barbershops and customers alike, by creating a transparent, efficient, and supportive community. We want to bring the best barbershops to the fingertips of every customer, while helping barbers grow their businesses in the modern digital world.

          Join us today—whether you&apos;re a barber or a customer—and experience the future of grooming services in Colombia!</p>
        </div>

        <div className="flex gap-4" >
          <img src="/barbershopThree.jpg" alt="barbershopThree" className="w-[300px] rounded-3xl" loading="lazy" />
          <img src="/barbershopFour.jpg" alt="barbershopFour" className="w-[300px] rounded-3xl" loading="lazy" />

        </div>

      </section>

    </main>
  )
}
