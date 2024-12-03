import CheckboxContainer from "../components/CheckboxContainer";
import PasswordInput from "../components/PasswordInput";







export default function EditBarbershop() {



  return (
    <main className="flex justify-center items-center w-full h-[110vh] bg-gray-50">

      <form className="flex flex-col gap-8 mt-20 w-[50em]" >

        <h2 className="p-2 text-white text-xl w-full bg-[#252525]" >Barbershop&apos;s Set up</h2>

        <PasswordInput
          type="text"
          label="Barbershop's Name:" 
          placeholder="Barbarians"
          idName="barbershop-name"
          // inputValue={first_name} 
          // onChangeFunc={(e) => dispatch({type: "first_name/set", payload: e.target.value})} 
        />

        <PasswordInput
          type="text"
          label="Barbershop's Description:" 
          placeholder="What best describes your business"
          idName="barbershop-description"
          // inputValue={first_name} 
          // onChangeFunc={(e) => dispatch({type: "first_name/set", payload: e.target.value})} 
        />

        <PasswordInput
          type="text"
          label="Barbershop's Address:" 
          placeholder="2154 grosshill ave, Nashville, TN"
          idName="barbershop-name"
          // inputValue={first_name} 
          // onChangeFunc={(e) => dispatch({type: "first_name/set", payload: e.target.value})} 
        />

        <PasswordInput
          type="tel"
          label="Barbershop's Phone:" 
          placeholder="XXX XXX XXXX without spaces"
          idName="barbershop-phone"
          // inputValue={first_name} 
          // onChangeFunc={(e) => dispatch({type: "first_name/set", payload: e.target.value})} 
        />

        <div className="flex items-center gap-10" >

          <div className="flex items-center justify-between gap-4 px-2 w-auto" >
            <label htmlFor="open">Open Time:</label>
            <input 
              id="open"
              name="open"
              type="time"
              // value={inputValue}
              // onChange={(e) => onChangeFunc(e)}
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
              // value={inputValue}
              // onChange={(e) => onChangeFunc(e)}
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
            required 
          />
        </div>

        <CheckboxContainer />

        <div className="flex justify-end" >  
          <button className="py-2 text-white w-20 bg-[#252525]" >
            Save
          </button>
        </div>

      </form> 

    </main>
  )
}
