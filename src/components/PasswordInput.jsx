import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import PropTypes from "prop-types";



export default function PasswordInput({label, idName, type = "password", inputValue, placeholder, onChangeFunc}) {

    const [isVisible, setIsVisible] = useState(false);

  if(type === "password") return (
    <div className="relative flex items-center justify-between px-2" >
        <label htmlFor={idName}>{label}</label>
        <input 
          id={idName}
          name={idName}
          type={isVisible ? "text" : "password"}
          value={inputValue}
          onChange={(e) => onChangeFunc(e)}
          placeholder={placeholder}
          className="px-4 py-2 w-[80%] font-sans border-[1px] border-[#252525]/30"
          required 
        />

        { isVisible ? 
            <FaEyeSlash 
                className='absolute right-5 cursor-pointer' 
                onClick={() => setIsVisible(prev => !prev)} 
            /> 
            
            : 
            
            <FaEye 
                className='absolute right-5 cursor-pointer' 
                onClick={() => setIsVisible(prev => !prev)} 
            />
        }
      </div>
  )


  return (
    <div className="relative flex items-center justify-between px-2" >
        <label htmlFor={idName}>{label}</label>
        <input 
          id={idName}
          name={idName}
          type={type}
          value={inputValue}
          onChange={(e) => onChangeFunc(e)}
          placeholder={placeholder}
          className="px-4 py-2 font-sans w-[80%] border-[1px] border-[#252525]/30"
          required 
        />
      </div>
  )
}


PasswordInput.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    idName: PropTypes.string,
    inputValue: PropTypes.string,
    onChangeFunc: PropTypes.func
}