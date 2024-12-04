import { FaBuilding } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { RiInformation2Fill } from "react-icons/ri";





export default function Contacts() {
  return (
    <main className="w-full min-h-screen">
      <div className={`flex justify-center items-center w-full h-[25em] bg-[linear-gradient(45deg,rgba(9,21,22,1),rgba(0,19,34,.5)),url("/clippers.jpg")] bg-cover`} >
        <h2 className="text-white text-7xl font-bold" >CONTACT US</h2>
      </div>

      <section className="flex flex-col gap-20 p-4 w-full h-auto " >

        <div className="flex items-center justify-around" >
          <h3 className="text-5xl font-semibold" >CONTACTS</h3>

          <div className="flex gap-4" >
            <div className="flex flex-col items-center p-4" >
              <h4 className="text-3xl flex items-center gap-2" > <FaBuilding /> Office Info:</h4>
              <p className="text-lg" >02 123123123</p>
              <p className="text-lg" >PEC: barberians@barbarians.com</p>
            </div>

            <div className="flex flex-col items-center p-4" >
              <h4 className="text-3xl flex items-center gap-2" > <IoPeople />  Public Relations Office:</h4>
              <p className="text-lg" >2154 golden ave, prado, Medellin</p>
            </div>

            <div className="flex flex-col items-center p-4" >
              <h4 className="text-3xl flex items-center gap-2" > <FaPhoneAlt /> Contact Center:</h4>
              <p className="text-lg" >+57 358-888-9966</p>
            </div>

          </div>

        </div>


        <div className="flex items-center justify-around" >
          <h3 className="text-5xl font-semibold" >STRUCTURE DETAILS</h3>

          <div className="flex gap-4" >
            <div className="flex flex-col items-center p-4" >
              <h4 className="text-3xl flex items-center gap-2" > <FaLocationDot /> Address:</h4>
              <p className="text-lg" >5478 rockyhill st, soledad, Medellin</p>
            </div>

            <div className="flex flex-col items-center p-4" >
              <h4 className="text-3xl flex items-center gap-2" > <FaCalendarAlt /> Opening Times:</h4>
              <p className="text-lg" >Mon - Fri: 8:00 AM - 17:00 PM</p>
              <p className="text-lg" >Sat: 8:00 AM - 12:00 PM</p>
            </div>

            <div className="flex flex-col items-center p-4" >
              <h4 className="text-3xl flex items-center gap-2" > <RiInformation2Fill />  Information Admissions Solvency:</h4>
              <p className="text-lg" >Phone: +57 555-897-3333</p>
              <p className="text-lg" >Mon - Fri: 8:00 AM - 17:00 PM</p>
            </div>

          </div>

        </div>
      </section>
    </main>
  )
}
