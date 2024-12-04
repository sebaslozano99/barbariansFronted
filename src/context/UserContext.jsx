import { createContext, useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import PropTypes from "prop-types";



//if user has SIGNED UP or LOGGED IN, our backend will send through cookies a token that expires in 1h. Whenever user reloads the page, we need to revalidate the token to make sure it is still valid



const BASE_API_URL = "http://localhost:5000";
const UserContext = createContext();

export function UserProvider({children}) {

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    console.log("user: ", user);
  }, [user])

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
      setIsAuthenticated(true);

    }
    catch(error){
      console.log(`Authentication error: ${error.message}`);
      setUser(null);
      setIsAuthenticated(false);
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