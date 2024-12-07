import { useEffect, useRef, useState } from "react";

const images = [
    {
        id: 1,
        image: "./public/barberOne.jpg"
    },
    {
        id: 2,
        image: "./public/barbershop.jpg"
    },
    {
        id: 3,
        image: "./public/barbershopFour.jpg"
    },
    {
        id: 4,
        image: "./public/barberTwo.jpg"
    }
];

export default function Slider() {
    
    const listRef = useRef();
    const [currIndex, setCurrIndex] = useState(0);

    useEffect(() => {
        const listNode = listRef.current; // gets UL dom element with all its node children
        const imgNode = listNode.querySelectorAll("li > img")[currIndex]; // returns an array of the images nodes and with [currIndex] we select the item depending on the currIndex

        if(imgNode){
            imgNode.scrollIntoView({
                behavior: "smooth"
            });
        }

    }, [currIndex])


    function handleIncrement(){
        setCurrIndex(prev => prev < images.length - 1 ? prev + 1 : 0);
    }

    function handleDecrement(){
        setCurrIndex(prev => prev > 0 ? prev - 1 : images.length - 1);
    }



  return (
    <main className="flex justify-center items-center w-full h-screen" >

        <div className="w-[700px] h-[480px] mx-auto" > { /* Main container */ }
            <div className="relative h-full" >  { /* Slider container */ }

                <div className="absolute z-10  top-1/2 ml-2 font-bold text-white text-4xl cursor-pointer" onClick={handleDecrement} >&#10092;</div>

                <div className="absolute z-10 right-0 top-1/2 mr-2 font-bold text-white text-4xl cursor-pointer" onClick={handleIncrement} >&#10093;</div>

                <div className="w-full h-full rounded-3xl border-2 border-[#eee] overflow-hidden" > { /* Images container */ }
                    <ul ref={listRef} >
                        {
                            images.map((item) => <li key={item.id}>
                                <img src={item.image} alt={item.image} width={700} height={480} />
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>

    </main>
  )
}
