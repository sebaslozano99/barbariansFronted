import { useMutation } from "@tanstack/react-query";
import { signup } from "../services/userAuth";
import toast from "react-hot-toast";

function useSignup(navigate, handleLoginSignup, role){

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: ({e, first_name, last_name, email, password, confirm_password}) => 
        signup(e, first_name, last_name, email, password, confirm_password, role),

        onSuccess: (data) => {
          handleLoginSignup(data.user);
          if(role === "user") navigate("/barbers");
          else navigate("/barbershop-profile/setup");
          toast.success(data.message);
        },

        onError: (error) => toast.error(error.message),
    });


    return { mutate, isPending, isError, error }
}


export default useSignup