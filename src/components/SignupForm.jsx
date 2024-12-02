import { Link } from 'react-router-dom'

export default function SignupForm() {
  return (
    <form className="flex flex-col gap-4 w-[40em]" >
      <h2 className="p-2 text-white text-xl w-full bg-[#252525]" >Create account</h2>

      <div className="flex items-center justify-between px-2" >
        <label htmlFor="name">First Name: </label>
        <input 
          id="name"
          name="name"
          type="text"
        //   value={email}
        //   onChange={(e) => setEmail(e.target.value)}
          placeholder="Ronald"
          className="px-4 py-2 w-[80%] border-[1px] border-[#252525]/30"
          required 
        />
      </div>

      <div className="flex items-center justify-between px-2" >
        <label htmlFor="last_name">Last Name: </label>
        <input 
          id="last_name"
          name="last_name"
          type="text"
        //   value={email}
        //   onChange={(e) => setEmail(e.target.value)}
          placeholder="Grymes"
          className="px-4 py-2 w-[80%] border-[1px] border-[#252525]/30"
          required 
        />
      </div>

      <div className="flex items-center justify-between px-2" >
        <label htmlFor="email">Email-Address: </label>
        <input 
          id="email"
          name="email"
          type="email"
        //   value={email}
        //   onChange={(e) => setEmail(e.target.value)}
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
        //   value={password}
        //   onChange={(e) => setPassword(e.target.value)}
          placeholder="************"
          className="px-4 py-2 w-[80%] border-[1px] border-[#252525]/30"
          required 
        />
      </div>

      <div className="flex gap-24 items-center px-2" >
        <label htmlFor="role">Role: </label>

        <select name="role" id="role" className='border-[1px] border-[#252525]/30 cursor-pointer'>
            <option value="user">User</option>
            <option value="barbershop">Barbershop</option>
        </select>
      </div>
      

      <div className="flex items-center justify-end gap-6" >
        <button className="px-8 py-1 text-white text-lg bg-[#252525] " >Sign up</button>
        <p>You already have an account? <Link to="/auth/login" className="text-yellow-600 underline" >Log in</Link> </p>
      </div>
    </form>
  )
}
