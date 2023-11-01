import '../Login/style.css';
import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const submitForm = async(e) => {
        e.preventDefault()

        const postData = { email, password};

        axios.post("http://127.0.0.1:8000/api/login", postData)
        .then(response => {
            if(response.data.status === "success"){
                let token = response.data.authorisation.token;
                let first_name = response.data.user.first_name;
                let last_name = response.data.user.last_name;

                localStorage.setItem("token", token);
                localStorage.setItem("first_name", first_name);
                localStorage.setItem("last_name", last_name);
                navigate('/home');
            }
            else{
                setErrorMessage("Wrong email or password");
            }
            
        })
        .catch(error => {
            if (error.response) {
                const { data } = error.response;
                setErrorMessage(data.message || "An error occurred during registration");
            } else {
                setErrorMessage("An error occurred during registration");
            }
        });
    }


  return (
    <div className="login">
        <form onSubmit={submitForm}>
            <h1 className='title'>DishDescovery</h1>
            <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                value={email}
                required
            />
            <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                value={password}
                required
            />
            {errorMessage && <div className='err'>{errorMessage}</div>}
            <button>Log in</button>
        </form>
    </div>
  );
}

export default Login;