import { createContext, useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import PropTypes from "prop-types";





const BASE_API_URL = "http://localhost:5000";
const UserContext = createContext();

export function UserProvider({children}) {

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function validateToken(){
    setIsLoading(true);
    try{
      const res = await fetch(`${BASE_API_URL}/api/auth/validate-token`, {
        method: "GET",
        credentials: "include",
      });

      if(!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }

      const data = await res.json();

      setUser(data);
    }
    catch(error){
      throw new Error(error.message);
    }
    finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    validateToken();
  }, [])


  return (
    <UserContext.Provider value={{
      user,
      isAuthenticated,
      isLoading,
      setUser,
      setIsAuthenticated
    }}>
      { children }
    </UserContext.Provider>
  )
}


export function useUserContext(){
    const context = useContext(UserContext);
    if(context === "undefined") throw new Error("'useUserContext' must be used inside 'useUserContext'");
    return context;
}


UserProvider.propTypes = {
    children: PropTypes.node
}