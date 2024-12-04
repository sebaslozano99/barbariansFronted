

const BASE_URL_API = "http://localhost:5000/api/auth";

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
        const res = await fetch(`${BASE_URL_API}/signup`, {
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




async function login(e, email, password){
    e.preventDefault();

    const user = {email, password};

    try {
        const res = await fetch(`${BASE_URL_API}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
            credentials: "include"
        });

        if(!res.ok){
            const errorData = await res.json();
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









async function logout(e){
    e.preventDefault();

    try {
        const res = await fetch(`${BASE_URL_API}/logout`, {
            method: "POST",
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
        throw new Error(error.message)
    }
}


export { signup, login, logout }
