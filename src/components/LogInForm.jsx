import { useState } from "react";
import { Link } from "react-router-dom";



export default function LogInForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="flex flex-col gap-4 w-[40em]" >
      <h2 className="p-2 text-white text-xl w-full bg-[#252525]" >Log in to your account</h2>

      <div className="flex items-center justify-between px-2" >
        <label htmlFor="email">Email-Address: </label>
        <input 
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="barbarianemail@barbarian.com"
          className="px-4 py-2 w-[80%] border-[1px] border-[#252525]/30"
          required 
        />
      </div>

      <div className="flex items-center justify-between px-2" >
        <label htmlFor="password">Password: </label>
        <input 
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="************"
          className="px-4 py-2 w-[80%] border-[1px] border-[#252525]/30"
          required 
        />
      </div>

      <div className="flex items-center justify-end gap-6" >
        <button className="px-8 py-1 text-white text-lg bg-[#252525] " >Log in</button>
        <p>You don&apos;t have an account yet? <Link to="/auth/signup" className="text-yellow-600 underline" >Sign Up</Link> </p>
      </div>
    </form>
  )
}
