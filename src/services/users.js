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

        console.log("Barbers: ", data);

        return data;
    }
    catch(error){
        throw new Error(error.message);
    }
}



export { getAllBarbers }