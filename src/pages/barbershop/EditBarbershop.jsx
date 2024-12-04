import { useEffect, useReducer, useState } from "react";
import CheckboxContainer from "../../components/CheckboxContainer";
import PasswordInput from "../../components/PasswordInput";


const initialStates = {
  barbershopName: "",
  barbershopDescription: "",
  barbershopAddress: "",
  barbershopPhone: "",
  barbershopOpenTime: "",
  barbershopCloseTime: "",
  barberShopPictures: [],
  barberShopServices: [],
}



function reducer(state, action){
  switch(action.type){
    case "barbershopName/set":
      return {
        ...state,
        barbershopName: action.payload,
      };

    case "barbershopDescription/set":
      return {
        ...state,
        barbershopDescription: action.payload,
      };

    case "barbershopAddress/set":
      return {
        ...state,
        barbershopAddress: action.payload,
      };

    case "barbershopPhone/set":
      return {
        ...state,
        barbershopPhone: action.payload,
      };

    case "barbershopOpenTime/set":
      return {
        ...state,
        barbershopOpenTime: action.payload,
      };

    case "barbershopCloseTime/set":
      return {
        ...state,
        barbershopCloseTime: action.payload,
      };

    // case "barberShopPictures/set":
    //   return {
    //     ...state, 
    //     barberShopPictures: state.barberShopPictures.push
    //   }

    default: throw new Error("Unknown action type!");
  }
}



export default function EditBarbershop() {

  const [images, setImages] = useState([]);
  const [services, setServices] = useState([]);
  const [{barbershopName, barbershopDescription, barbershopAddress, barbershopPhone, barbershopOpenTime, barbershopCloseTime }, dispatch] = useReducer(reducer, initialStates);




  function handleCheckbox(e){
    const { value, checked } = e.target;

    if(checked){
      setServices((prevServices) => [...prevServices, value]);
    }
    else{
      setServices((prevServices) => prevServices.filter((service) => service !== value));
    }
  }


  return (
    <main className="flex justify-center items-center py-8 w-full h-auto">

      <form className="flex flex-col gap-8 w-[50em]" >

        <h2 className="p-2 text-white text-xl w-full bg-[#252525]" >Barbershop&apos;s Set up</h2>

        <PasswordInput
          type="text"
          label="Barbershop's Name:" 
          placeholder="Barbarians"
          idName="barbershop-name"
          inputValue={barbershopName} 
          onChangeFunc={(e) => dispatch({type: "barbershopName/set", payload: e.target.value})} 
        />

        <PasswordInput
          type="text"
          label="Barbershop's Description:" 
          placeholder="What best describes your business"
          idName="barbershop-description"
          inputValue={barbershopDescription} 
          onChangeFunc={(e) => dispatch({type: "barbershopDescription/set", payload: e.target.value})} 
        />

        <PasswordInput
          type="text"
          label="Barbershop's Address:" 
          placeholder="2154 grosshill ave, Nashville, TN"
          idName="barbershop-name"
          inputValue={barbershopAddress} 
          onChangeFunc={(e) => dispatch({type: "barbershopAddress/set", payload: e.target.value})} 
        />

        <PasswordInput
          type="tel"
          label="Barbershop's Phone:" 
          placeholder="XXX XXX XXXX without spaces"
          idName="barbershop-phone"
          inputValue={barbershopPhone} 
          onChangeFunc={(e) => dispatch({type: "barbershopPhone/set", payload: e.target.value})} 
        />

        <div className="flex items-center gap-10" >

          <div className="flex items-center justify-between gap-4 px-2 w-auto" >
            <label htmlFor="open">Open Time:</label>
            <input 
              id="open"
              name="open"
              type="time"
              value={barbershopOpenTime}
              onChange={(e) => dispatch({type: "barbershopOpenTime/set", payload: e.target.value})}
              className="px-4 py-2 font-sans w-auto border-[1px] border-[#252525]/30 cursor-pointer"
              required 
            />
          </div>

          <div className="flex items-center justify-between gap-4 px-2 w-auto" >
            <label htmlFor="open">Close Time:</label>
            <input 
              id="open"
              name="open"
              type="time"
              value={barbershopCloseTime}
              onChange={(e) => dispatch({type: "barbershopCloseTime/set", payload: e.target.value})}
              className="px-4 py-2 font-sans w-auto border-[1px] border-[#252525]/30 cursor-pointer"
              required 
            />
          </div>

        </div>

        <div className="flex items-center gap-1 px-2 w-auto" >
          <label htmlFor="images">Barbershop&apos;s Pictures:</label>
          <input 
            id="images"
            name="images"
            type="file"
            multiple
            accept=".jpg, .jpeg"
            className="px-4 py-2 w-auto cursor-pointer"
            onChange={(e) => setImages([...e.target.files])}
            required 
          />
        </div>

        <CheckboxContainer handleCheckbox={handleCheckbox} />

        <div className="flex justify-end" >  
          <button className="py-2 text-white w-20 bg-[#252525]" >
            Save
          </button>
        </div>

      </form> 

    </main>
  )
}