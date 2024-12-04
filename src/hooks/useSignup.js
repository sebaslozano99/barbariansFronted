import { useMutation } from "@tanstack/react-query";
import { signup } from "../services/userAuth";

function useMutate(objectUser){

    return useMutation({
        mutationFn: (e) => signup(e, ...objectUser),
        onSuccess: () => {
            
        }
    })
}


export default useMutate