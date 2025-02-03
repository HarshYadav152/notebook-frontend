import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {
    const [credentials, setCredentials] = useState({ name: '', username: '', email: '', password: '', cpassword: '' })
    const navigate = useNavigate(); // equivaent to useHistory

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, username, email, password } = credentials;
        const response = await fetch(`${import.meta.env.VITE_API_URL}/notebook/auth/createuser`, {
            method: 'POST', // or 'POST', 'PUT', 'DELETE', etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, username, email, password })
        });
        const json = await response.json();
        console.log(json);

        if(json.success){

            // rediret to notes and save authtoken of the user
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            props.showAlert("Account created successfully","success");
        }else{
            props.showAlert("Invalid Credentials","danger");
        }
    }
    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='container'>
            <h1 className='text-center'>Join us</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-floating my-3">
                    <input type="text" className="form-control" id="name" placeholder="Your Name" name='name' onChange={onchange} />
                    <label htmlFor="floatingName">Name</label>
                </div>
                <div className="form-floating my-3">
                    <input type="text" className="form-control" id="username" name='username' placeholder="Username" onChange={onchange} />
                    <label htmlFor="floatingUsername">Username</label>
                </div>
                <div className="form-floating my-3">
                    <input type="email" className="form-control" id="email" name='email' placeholder="Enter your email" onChange={onchange} />
                    <label htmlFor="floatingEmail">Email</label>
                </div>
                <div className="form-floating my-3">
                    <input type="password" className="form-control" id="password" name='password' placeholder="password" onChange={onchange} required minLength={5}/>
                    <label htmlFor="floatingInput">Password</label>
                </div>
                <div className="form-floating my-3">
                    <input type="password" className="form-control" id="cpassword" name='cpassword' placeholder="cpassword" onChange={onchange} required minLength={5} />
                    <label htmlFor="floatingInput">Confirm Password</label>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>

            </form>
        </div>
    )
}
