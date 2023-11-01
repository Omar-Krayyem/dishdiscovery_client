import '../Signup/style.css';
import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [first_name, setFName] = useState("");
    const [last_name, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const submitForm = async(e) => {
        e.preventDefault()

        const postData = {first_name, last_name, email, password};

        axios.post("http://127.0.0.1:8000/api/register", postData)
        .then(response => {
            console.log(response.data);
            let $token = response.data.authorisation.token 
            let first_name = response.data.user.first_name;
            let last_name = response.data.user.last_name;

            localStorage.setItem("token", $token);
            localStorage.setItem("first_name", first_name);
            localStorage.setItem("last_name", last_name);
            navigate('/home');
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="signup">
            <form onSubmit={submitForm}>
                <h1 className='title'>DishDescovery</h1>
                <input
                    onChange={(e) => setFName(e.target.value)}
                    type="text"
                    placeholder="First Name"
                    value={first_name}
                    required
                />
                <input
                    onChange={(e) => setLName(e.target.value)}
                    type="text"
                    placeholder="Last Name"
                    value={last_name}
                    required
                />
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
                <button >Sign up</button>
            </form>
        </div>
    );
}

export default Signup;