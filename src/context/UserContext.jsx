import { createContext, useReducer } from "react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { validateToken } from "../services/userAuth";
import PropTypes from "prop-types";



//if user has SIGNED UP or LOGGED IN, our backend will send through cookies a token that expires in 1h. Whenever user reloads the page, we need to revalidate the token to make sure it is still valid


// const BASE_API_URL = "http://localhost:5000";
const UserContext = createContext();


const initialState = {
  user: null,
  isAuthenticated: false,
  isValidatingToken: true,
};


function reducer(state, action){
  switch(action.type){
    case "user/dataArrived":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };

    case "user/loggedOut":
      return {
        ...state,
        user: null,
        isAuthenticated: false
      };

    case "isValidatingToken/set":
      return {
        ...state,
        isValidatingToken: action.payload
      };

    default: throw new Error("Unknown action type!");
  }
}




export function UserProvider({children}) {

  const [{user, isAuthenticated, isValidatingToken}, dispatch] = useReducer(reducer, initialState);

  function handleLoginSignup(data){
    dispatch({type: "user/dataArrived", payload: data});
  }

  function handleLogout(){
    dispatch({type: "user/loggedOut"});
  }

  useQuery({
    queryKey: ["user"],
    queryFn: () => validateToken(dispatch),
    retry: 1
  });

  // async function validateToken(){
  //   dispatch({type: "isLoading/set", payload: true});
  //   try{
  //     const res = await fetch(`${BASE_API_URL}/api/auth/validate-token`, {
  //       method: "GET",
  //       credentials: "include",
  //     });

  //     if(!res.ok) {
  //       const errorData = await res.json();
  //       throw new Error(errorData.message);
  //     }

  //     const data = await res.json();
  //     dispatch({type: "user/dataArrived", payload: data});

  //   }
  //   catch(error){
  //     console.log(`Authentication error: ${error.message}`);
  //     dispatch({type: "user/loggedOut"});
  //   }
  //   finally{
  //     dispatch({type: "isLoading/set", payload: false});
  //   }
  // }


  // useEffect(() => {
  //   validateToken();
  // }, [])


  return (
    <UserContext.Provider value={{
      user,
      isAuthenticated,
      isValidatingToken,
      handleLoginSignup,
      handleLogout
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