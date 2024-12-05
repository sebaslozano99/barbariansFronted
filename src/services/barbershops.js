const BASE_URL_API ="http://localhost:5000/api/barbershop";


async function setupBarbershop(e, user_id, name, description, address, phone, openTime, closeTime, images, services){
    e.preventDefault();

    console.log(services);

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

    //When the input file has the 'multiple' attribute, we must loop through the array to append each file to FormData, otherwise in the backend is gonna cause errors
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



export { setupBarbershop }