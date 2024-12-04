import { useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { signup } from '../services/userAuth';
import PasswordInput from './PasswordInput';
import toast from 'react-hot-toast';
import Spinner from './Spinner';
import { useUserContext } from '../context/UserContext';


const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
  role: "user"
}



function reducer(state, action){
  switch(action.type){
    case "first_name/set":
      return {
        ...state,
        first_name: action.payload,
      };

    case "last_name/set":
      return {
        ...state,
        last_name: action.payload,
      };

    case "email/set":
      return {
        ...state,
        email: action.payload,
      };

    case "password/set":
      return {
        ...state,
        password: action.payload,
      };

    case "confirm_password/set":
      return {
        ...state,
        confirm_password: action.payload,
      };

    case "role/set":
      return {
        ...state,
        role: action.payload,
      }

    default: throw new Error("Unknown action type!");
  }
}



export default function SignupForm() {

  const { setUser, setIsAuthenticated } = useUserContext();
  const [{first_name, last_name, email, password, confirm_password, role}, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();


  const { mutate, isPending } = useMutation({
    mutationFn: (e) => signup(e, first_name, last_name, email, password, confirm_password, role),
    onSuccess: (data) => {
      setUser(data.user);
      setIsAuthenticated(true);
      if(role === "user") navigate("/barbers");
      else navigate("/barbershop-profile/edit");
      toast.success(data.message);
    },
    onError: (error) => toast.error(error.message),
  });


  return (
    <form 
      onSubmit={mutate}
      className="flex flex-col gap-4 mt-20 w-[40em]" 
    >
      <h2 className="p-2 text-white text-xl w-full bg-[#252525]" >Create account</h2>

      <PasswordInput
        type="text"
        label="First Name:" 
        placeholder="Rick"
        idName="first_name"
        inputValue={first_name} 
        onChangeFunc={(e) => dispatch({type: "first_name/set", payload: e.target.value})} 
      />

      
      <PasswordInput
        type="text"
        label="Last Name:" 
        placeholder="Grymes"
        idName="last_name"
        inputValue={last_name} 
        onChangeFunc={(e) => dispatch({type: "last_name/set", payload: e.target.value})} 
      />

      <PasswordInput
        type="email"
        label="Email Address:" 
        placeholder="barbarianemail@barbarian.com"
        idName="email"
        inputValue={email} 
        onChangeFunc={(e) => dispatch({type: "email/set", payload: e.target.value})} 
      />

      <PasswordInput
        label="password:"
        placeholder="************" 
        idName="password"
        inputValue={password} 
        onChangeFunc={(e) => dispatch({type: "password/set", payload: e.target.value})} 
      />
      
      <PasswordInput
        label="confirm password:"
        placeholder="************" 
        idName="confirm"
        inputValue={confirm_password} 
        onChangeFunc={(e) => dispatch({type: "confirm_password/set", payload: e.target.value})} 
      />

      <div className="flex gap-24 items-center px-2" >
        <label htmlFor="role">Role: </label>

        <select 
          name="role" 
          id="role" 
          value={role} 
          onChange={(e) => dispatch({type: "role/set", payload: e.target.value})}
          className='border-[1px] border-[#252525]/30 cursor-pointer'
        >
          <option value="user">User</option>
          <option value="barbershop">Barbershop</option>
        </select>
      </div>
      

      <div className="flex items-center justify-end gap-6" >
        <button className="flex justify-center items-center px-8 py-1 text-white text-lg w-28 h-10 bg-[#252525] " >{isPending ? <Spinner  /> : "Sign up"  }</button>
        <p>You already have an account? <Link to="/auth/login" className="text-yellow-600 underline" >Log in</Link> </p>
      </div>
      
    </form>
  )
}
