import { useQuery } from "@tanstack/react-query";
import { fetchBarbershopsProfile } from "../services/barbershops";



export default function useFetchBarberProfile(user){
  return useQuery({
    queryKey: ["barbershop-info"],
    queryFn: () => fetchBarbershopsProfile(user),
    retry: 1,
    staleTime: 1000 * 60 * 10,
  });
}