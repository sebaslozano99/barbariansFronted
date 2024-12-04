import { useNavigate } from "react-router-dom";


export default function InvalidAuthAccess() {

  const navigate = useNavigate();

  return (
    <main className="flex flex-col justify-center items-center gap-2 w-full h-[90vh] bg-gray-50">
      <h2 className="text-8xl" >AUTHENTICATION PAGE</h2>

      <p className="text-xl text-center" >You&apos;re authenticated already!. <br/> To have access to this page, log out of your account</p>

      <button 
        className="bg-yellow-500 px-2 py-1 text-lg"
        onClick={() => navigate(-1)} 
      >
        Go back &rarr;
      </button>
  </main>
  )
}
