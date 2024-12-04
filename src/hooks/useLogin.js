import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { login } from "../services/userAuth";


export default function useLogin(navigate, handleLoginSignup){
    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: ({e, email, password}) => login(e, email, password),
        onSuccess: (data) => {
          if(data.user.role === "barbershop") navigate("/barbershop-dashboard");
          else navigate("/");
    
          handleLoginSignup(data.user);
          toast.success(data.message);
        },
        onError: (error) => toast.error(error.message),
      });


      return { mutate, isPending, isError, error }
}