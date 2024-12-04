import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import PasswordInput from "./PasswordInput";
import Spinner from "../components/Spinner";
import useLogin from "../hooks/useLogin";





export default function LogInForm() {

  const { handleLoginSignup } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { mutate, isPending } = useLogin(navigate, handleLoginSignup);


  return (
    <form className="flex flex-col gap-4 w-[40em]" onSubmit={(e) => mutate({e, email, password})} >
      <h2 className="p-2 text-white text-xl w-full bg-[#252525]" >Log in to your account</h2>

      <PasswordInput
        type="email"
        label="Email Address:" 
        placeholder="barbarianemail@barbarian.com"
        idName="email"
        inputValue={email} 
        onChangeFunc={(e) => setEmail(e.target.value)} 
      />

      <PasswordInput
        label="Password:" 
        placeholder="************"
        idName="password"
        inputValue={password} 
        onChangeFunc={(e) => setPassword(e.target.value)} 
      />

      <div className="flex items-center justify-end gap-6" >
        <button className="px-8 py-1 text-white text-lg bg-[#252525] " >{ isPending ? <Spinner /> : "Log in" }</button>
        <p>You don&apos;t have an account yet? <Link to="/auth/signup" className="text-yellow-600 underline" >Sign Up</Link> </p>
      </div>

    </form>
  )
}
