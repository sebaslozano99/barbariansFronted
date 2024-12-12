const BASE_URL_API ="http://localhost:5000/api/barbershop";




// GET request

async function fetchBarbershopsProfile(user_id){

    try{
        const res = await fetch(`${BASE_URL_API}/profile/${user_id}`, {
            method: "GET",
            credentials: "include"
        });

        if(!res.ok){
            const errorData = await res.json();
            throw new Error(errorData.message);
        }

        const data = await res.json();

        return data;

    }
    catch(error){
        console.log("Profile error: ", error.message);
        throw new Error(error.message);
    }
}





// POST request
async function setupBarbershop(e, user_id, name, description, address, phone, openTime, closeTime, images, services){
    e.preventDefault();


    // validations -----
    if(phone.length !== 10) throw new Error("Phone number must be 10 digits");
    if(services.length < 4) throw new Error("Select at least 4 services that you offered!");
    if(openTime > closeTime) throw new Error("Open time cannot be later than Close time!");


    const userData = new FormData();
    userData.append("user_id", user_id);
    userData.append("business_name", name);
    userData.append("description", description);
    userData.append("address", address);
    userData.append("open_time", openTime);
    userData.append("close_time", closeTime);
    userData.append("phone", phone);

    // When the input file has the 'multiple' attribute, we must loop through the array to append each file to FormData, otherwise in the backend is gonna cause errors
    for(let i = 0; i < images.length; i++){
        userData.append("images", images[i]);
    }

    for(let i = 0; i < services.length; i++){
        userData.append("services", JSON.stringify(services[i])); // stringify the array of objects, so that it can be read in the backend. Otherwise if we instead of showing the objects it'll show [object object]
    }
    

    try{
        const res = await fetch(`${BASE_URL_API}/setup`, {
            method: "POST",
            credentials: "include",
            body: userData,
        });

        if(!res.ok) {
            const errorData = await res.json();
            console.log(errorData);
            throw new Error(errorData.message);
        }

        const data = await res.json();
        
        console.log(data);

        return data;
    }
    catch(error){
        console.log(error);
        throw new Error(error.message);
    }
}






// PUT request
async function editBarbershopInfo(e, user_id, name, description, address, phone, openTime, closeTime, images, services){
    e.preventDefault();

    // validations -----
    if(phone.length !== 10) throw new Error("Phone number must be 10 digits");
    if(openTime > closeTime) throw new Error("Open time cannot be later than Close time!");
    if(services.length > 0 && services.length < 4) throw new Error("Select at least 4 services!");

 
    const barbershopData = new FormData();
    barbershopData.append("business_name", name);
    barbershopData.append("description", description);
    barbershopData.append("address", address);
    barbershopData.append("open_time", openTime);
    barbershopData.append("close_time", closeTime);
    barbershopData.append("phone", phone);
 

     //When the input file has the 'multiple' attribute, we must loop through the array to append each file to FormData, otherwise in the backend is gonna cause errors
     if(images){
        for(let i = 0; i < images.length; i++){
            barbershopData.append("images", images[i]);
        }
     }


     if(services){
        for(let i = 0; i < services.length; i++){
            barbershopData.append("services", JSON.stringify(services[i])); // stringify the array of objects, so that it can be read in the backend. Otherwise if we instead of showing the objects it'll show [object object]
        }
     }
 
     
    try{
        const res = await fetch(`${BASE_URL_API}/edit/${user_id}`, {
            method: "PUT",
            credentials: "include",
            body: barbershopData,
        });


        if(!res.ok) {
            const errorData = await res.json();
            console.log(errorData);
            throw new Error(errorData.message);
        }

        const data = await res.json();
        
        console.log(data);

        return data;
    }
    catch(error){
        console.log(error);
        throw new Error(error.message);
    }
}


export { fetchBarbershopsProfile, setupBarbershop, editBarbershopInfo }