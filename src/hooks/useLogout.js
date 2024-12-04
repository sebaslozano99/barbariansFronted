import { useMutation } from "@tanstack/react-query";
import { logout } from "../services/userAuth";
import toast from "react-hot-toast";



export default function useLogout(navigate, handleLogout){
    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: (e) => logout(e),
        onSuccess: (data) => {
          navigate("/");
          toast.success(data.message);
          handleLogout();
        },
        onError: (error) => {
          toast.error(error.message);
        }
    })


    return { mutate, isPending, isError, error }
}