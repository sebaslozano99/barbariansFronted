

export default function Footer() {
  return (
    <footer className="grid grid-cols-4 gap-4 p-8 w-full h-72 bg-[#252525]" >

      <div className="flex justify-center items-center" >
        <h2 className="text-6xl font-semibold text-yellow-500" >BARBARIANS.COM</h2>
      </div>

      <div className="flex flex-col items-center gap-5 p-4" >
        <h3 className="text-4xl font-semibold text-white text-center" >PRODUCT</h3>

        <ul className="flex flex-col gap-2 text-center" >
          <li className="text-white text-xl cursor-pointer hover:underline" >Features</li>
          <li className="text-white text-xl cursor-pointer hover:underline" >Security</li>
          <li className="text-white text-xl cursor-pointer hover:underline" >Pricing</li>
          <li className="text-white text-xl cursor-pointer hover:underline" >Resources</li>
        </ul>
      </div>


      <div className="flex flex-col items-center gap-5 p-4" >
        <h3 className="text-4xl font-semibold text-white text-center" >SUPPORT</h3>

        <ul className="flex flex-col gap-2 text-center" >
          <li className="text-white text-xl cursor-pointer hover:underline" >HELP</li>
          <li className="text-white text-xl cursor-pointer hover:underline" >Community</li>
          <li className="text-white text-xl cursor-pointer hover:underline" >Forum</li>
          <li className="text-white text-xl cursor-pointer hover:underline" >Training</li>
        </ul>
      </div>


      <div className="flex flex-col items-center gap-5 p-4" >
        <h3 className="text-4xl font-semibold text-white text-center" >Company</h3>

        <ul className="flex flex-col gap-2 text-center" >
          <li className="text-white text-xl cursor-pointer hover:underline" >About</li>
          <li className="text-white text-xl cursor-pointer hover:underline" >Blog</li>
          <li className="text-white text-xl cursor-pointer hover:underline" >Careers</li>
        </ul>
      </div>

    </footer>
  )
}
