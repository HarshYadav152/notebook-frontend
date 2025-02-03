import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const [credentials, setCredentials] = useState({username:'',password:''})
    const navigate = useNavigate(); // equivaent to useHistory

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${import.meta.env.VITE_API_HOST}/notebook/auth/loginuser`, {
            method: 'POST', // or 'POST', 'PUT', 'DELETE', etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({username:credentials.username,password:credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            // rediret to notes and save authtoken of the user
            localStorage.setItem('token',json.authtoken);
            // localStorage.setItem('uname',json.username)
            console.log(json.authtoken);
            props.showAlert("Welcome back","success")
            navigate("/")
            
        }else{
            props.showAlert("Invalid Credentials","danger")
        }
    }
    const onchange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" name='username' value={credentials.username} aria-describedby="emailHelp" onChange={onchange} />
                    {/* <div id="emailHelp" className="form-text">We'll never share your user with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' id="password" value={credentials.password} onChange={onchange} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Agree to share details</label>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}
