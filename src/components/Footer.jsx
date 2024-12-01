


export default function Footer() {
  return (
    <footer className="grid grid-cols-4 gap-4 p-8 mt-24 w-full h-72 bg-[#252525]" >

      <div className="flex justify-center items-center" >
        <h2 className="text-6xl font-semibold text-yellow-500" >BARBARIANS.COM</h2>
      </div>

      <div className="flex flex-col items-center gap-5 p-4" >
        <h3 className="text-4xl font-semibold text-white text-center" >PRODUCT</h3>

        <ul className="flex flex-col gap-2 text-center" >
          <li><a className="text-white text-xl hover:underline" href="#">Features</a></li>
          <li><a className="text-white text-xl hover:underline" href="#">Security</a></li>
          <li><a className="text-white text-xl hover:underline" href="#">Pricing</a></li>
          <li><a className="text-white text-xl hover:underline" href="#">Resources</a></li>
        </ul>
      </div>


      <div className="flex flex-col items-center gap-5 p-4" >
        <h3 className="text-4xl font-semibold text-white text-center" >SUPPORT</h3>

        <ul className="flex flex-col gap-2 text-center" >
          <li><a className="text-white text-xl hover:underline" href="#">HELP</a></li>
          <li><a className="text-white text-xl hover:underline" href="#">Community</a></li>
          <li><a className="text-white text-xl hover:underline" href="#">Forum</a></li>
          <li><a className="text-white text-xl hover:underline" href="#">Training</a></li>
        </ul>
      </div>


      <div className="flex flex-col items-center gap-5 p-4" >
        <h3 className="text-4xl font-semibold text-white text-center" >Company</h3>

        <ul className="flex flex-col gap-2 text-center" >
          <li><a className="text-white text-xl hover:underline" href="#">About</a></li>
          <li><a className="text-white text-xl hover:underline" href="#">Blog</a></li>
          <li><a className="text-white text-xl hover:underline" href="#">Carrers</a></li>
        </ul>
      </div>

    </footer>
  )
}
