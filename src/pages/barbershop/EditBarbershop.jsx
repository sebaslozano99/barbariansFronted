import { useReducer } from "react";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../../components/PasswordInput";
import CheckboxContainer from "../../components/CheckboxContainer";
import useEditBarbershop from "../../hooks/useEditBarbershop";


const initialStates = {
  barbershopName: "",
  barbershopDescription: "",
  barbershopAddress: "",
  barbershopPhone: "",
  barbershopOpenTime: "08:00",
  barbershopCloseTime: "18:00",
  barbershopImages: null,
  barbershopServices: []
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

    case "barbershopImages/set":
      return {
        ...state,
        barbershopImages: action.payload,
      };

    case "barbershopServices/set":
      return {
        ...state,
        barbershopServices: [...state.barbershopServices, action.payload]
      };

    case "barbershopServices/filter":
      return {
        ...state,
        barbershopServices: state.barbershopServices.filter((service) => service.service !== action.payload)
      };

    default: throw new Error("Unknown action type!");
  }
}



export default function EditBarbershop() {


  const { user } = useUserContext();
  const navigate = useNavigate();

  const [{ 
    barbershopName, 
    barbershopDescription, 
    barbershopAddress, 
    barbershopPhone, 
    barbershopOpenTime, 
    barbershopCloseTime, 
    barbershopImages, 
    barbershopServices 
  }, dispatch] = useReducer(reducer, initialStates);

  const { mutate, isPending } = useEditBarbershop(user?.id, barbershopName, barbershopDescription, barbershopAddress, barbershopPhone, barbershopOpenTime, barbershopCloseTime, barbershopImages, barbershopServices, navigate);


  function handleCheckbox(e){
    const { value, checked } = e.target;

    if(checked){
      dispatch({type: "barbershopServices/set", payload: { service: value, price: 20 } });
    }
    else{
      dispatch({type: "barbershopServices/filter", payload: value });
    }
  }


  return (
    <main className="flex flex-col justify-center items-center gap-8 py-8 w-full h-auto">

      <h2 className="text-4xl" >Barbershop set up</h2>

      <form className="flex flex-col gap-8 w-[50em]" onSubmit={mutate} >

        <p className="p-2 text-white text-xl w-full bg-[#252525]" >Fill up all the information below</p>

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
          idName="barbershop-address"
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
              min="07:00"
              onChange={(e) => dispatch({type: "barbershopOpenTime/set", payload: e.target.value})}
              className="px-4 py-2 font-sans w-auto border-[1px] border-[#252525]/30 cursor-pointer"
              required 
            />
          </div>

          <div className="flex items-center justify-between gap-4 px-2 w-auto" >
            <label htmlFor="close">Close Time:</label>
            <input 
              id="close"
              name="close"
              type="time"
              value={barbershopCloseTime}
              max="22:00"
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
            accept="image/jpg, image/jpeg"
            className="px-4 py-2 w-auto cursor-pointer"
            onChange={(e) => dispatch({type: "barbershopImages/set", payload: e.target.files})}
            required 
          />
        </div>

        <CheckboxContainer handleCheckbox={handleCheckbox} />

        <div className="flex justify-end" >  
          <button className="py-2 text-white w-20 bg-[#252525]" >
            { isPending ? "Saving..." : "Save" }
          </button>
        </div>

      </form> 

    </main>
  )
}
