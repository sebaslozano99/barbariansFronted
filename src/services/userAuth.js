

const BASE_URL_API = "http://localhost:5000";

const regEx = /[\d\W_]/g;



async function signup(e, first_name, last_name, email, password, confirm_password, role){
    e.preventDefault();

    if(regEx.test(first_name) || regEx.test(last_name)) throw new Error("Neither first name nor last name can contain numbers or symbols!");
    if(password !== confirm_password) throw new Error("Confirm your password correctly!");
    if(password.length < 6) throw new Error("Password must be at least 6 characters long!");


    const newUser = {
        first_name, 
        last_name,
        email,
        password,
        role
    };

    try {
        const res = await fetch(`${BASE_URL_API}/api/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
            credentials: "include"
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
        throw new Error(error.message);
    }
}



export { signup }
