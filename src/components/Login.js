import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const host = "http://localhost:1708";
    const [credentials, setCredentials] = useState({email: "", password: "" });


    const handleClick = async (e)=>{
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            localStorage.setItem('token',json.authToken);
            navigate('/');  
        }
        else{
            alert("Enter Invalid Credentials");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value});
    }

  return (
    <div className='container p-5' style={{marginTop:'134px',color:'#880ED4'}}>
         <div className="container border p-5">
                <center><h3 className='mb-4' style={{ color: '#880ED4' }}>Log In</h3></center>
                <form>
                    <div className="mb-3">
                        <label style={{ fontWeight: '500' }} htmlFor="email" className="form-label">Email address :</label>
                        <input type="email" className="form-control" onChange={onChange} name='email' id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label style={{ fontWeight: '500' }} htmlFor="password" className="form-label">Password :</label>
                        <input type="password" className="form-control" onChange={onChange} name='password' id="password" />
                    </div>
                    <button type="submit" onClick={handleClick} style={{ backgroundColor: '#880ED4', color: 'white' }} className="btn">Submit</button>
                </form>
            </div>
    </div>
  )
}

export default Login
