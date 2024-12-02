import { Link } from "react-router-dom";



export default function NotFound() {
  return (
    <main className="flex flex-col gap-2 justify-center items-center w-full h-screen">
      <h2 className="text-9xl" >404</h2>
      <p className="text-lg" >Barbarian, the page you&apos;re looking for doesn&apos;t exist or has been moved. Please go back to the homepage!</p>
      <Link to="/" className="px-10 py-2 text-xl bg-yellow-500" >Go back home &rarr;</Link>
    </main>
  )
}
