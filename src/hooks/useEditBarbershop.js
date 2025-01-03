import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editBarbershopInfo } from "../services/barbershops";
import toast from "react-hot-toast";




export default function useEditBarbershop(user_id, barbershopName, barbershopDescription, barbershopAddress, barbershopPhone, barbershopOpenTime, barbershopCloseTime, images, services, navigate){
  
  const queryClient = useQueryClient(); 

  const { mutate, isPending } = useMutation({

      mutationFn: (e) => editBarbershopInfo(e, user_id, barbershopName, barbershopDescription, barbershopAddress, barbershopPhone, barbershopOpenTime, barbershopCloseTime, images, services),

      onSuccess: (data) => {
        queryClient.invalidateQueries({queryKey: ["barbershop-info"]});
        toast.success(data.message, { duration: 2000});
        navigate("/barbershop-profile");
      },

      onError: (error) => {
        toast.error(error.message, { duration: 5000 });
      }
  }); 


  return { mutate, isPending }
}