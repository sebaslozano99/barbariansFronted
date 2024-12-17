const BASE_URL_API = "http://localhost:5000/api/users";




async function getAllBarbers(){
    try{
        const res = await fetch(`${BASE_URL_API}/getallbarbers`, {
            method: "GET",
            credentials: "include",
        });

        if(!res.ok){
            const errorData = await res.json();
            throw new Error(errorData);
        }

        const data = await res.json();

        return data;
    }
    catch(error){
        throw new Error(error.message);
    }
}



async function getSingleBarbershop(barbershop_id){
    try{
        const res = await fetch(`${BASE_URL_API}/getsinglebarbershop/${barbershop_id}`, {
            method: "GET",
            credentials: "include",
        });

        if(!res.ok){
            const errorData = await res.json();
            throw new Error(errorData);
        }

        const data = await res.json();

        return data;
    }
    catch(error){
        throw new Error(error.message);
    }
}



export { getAllBarbers, getSingleBarbershop }