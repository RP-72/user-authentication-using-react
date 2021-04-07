import React, {useState, useEffect} from 'react'
import f from './config/fire'

function Login() {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = (e) =>{
        e.preventDefault();
        
        f.auth().signInWithEmailAndPassword(email,password).then((u) => {
            console.log(u);
        }).catch((err) =>{
            console.log(err.message);
        });
    }

    const signup = (e) =>{
        e.preventDefault();
        f.auth().createUserWithEmailAndPassword(email,password).then((u)=>{
            console.log(u);
        }).catch((err) =>{
            console.log(err);
        })
    }
    
    return (
        <div>
            <form>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email here"
                    onChange={(e) =>{setEmail(e.target.value)}}
                    value={email}
                />
                <input 
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) =>{setPassword(e.target.value)}}
                    placeholder="Enter your password here"
                    value={password}
                />
                <button onClick={login}>Login</button>
                <button onClick={signup}>Sign up</button>
            </form>
        </div>
    )
}

export default Login
