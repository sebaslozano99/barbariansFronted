import Spinner from "./Spinner";

export default function LoadingPage() {
  return (
    <main className="flex flex-col justify-center items-center gap-8 py-8 w-full min-h-[90vh] bg-red--500 text-white">
      <Spinner size={10} />
    </main>
  )
}
