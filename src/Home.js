import userEvent from '@testing-library/user-event';
import React, {useState, useEffect} from 'react'
import f from './config/fire';

function Home({email, password}) {
    // const userCredential =  f.auth().signInWithCredential();
    // console.log("additional user info: ", userCredential.additionalUserInfo);
    const [firstLogin,setFirstLogin] = useState(false);
    const [name, setName] = useState('');
    const uc = f.auth().signInAnonymously();
    console.log("additional USER INFO: ",uc);
    const listener = () =>{
        f.auth().onAuthStateChanged((u) => {
            if(u){
                if(!u.displayName){
                    setFirstLogin(true);
                }
                else{
                    setName(u.displayName);
                }
            console.log(u);
            }
        })
    };

    const listener2 = () =>{
        f.auth().onAuthStateChanged((u) => {
            if(u){
                u.updateProfile({
                    displayName: name
                })
            console.log(u);
            }
        })
    };

    useEffect(()=>{
        listener();
    },[])
    useEffect(()=>{
        //console.log(firstLogin);
        listener2();
    },[name])


    // useEffect(()=>{
    //     f.auth().signInWithEmailAndPassword(email,password)
    //     f.auth().onAuthStateChanged((u) => {
    //         if(u){
    //             //console.log("HOOOROAAA");
    //         u.prof.name=name;
    //         //setUser(u);
    //         }
    //     })
    // },[name])

    const logout = () =>{
        f.auth().signOut();
    }

    return (
        <div>
            {firstLogin ?
            (
                <form>
                    <input 
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name here"
                        onChange={(e) =>{setName(e.target.value)}}
                        value={name}
                    />
                </form>
                
            ): (
                <h1> Name: {name} </h1>
            )}
            <button onClick={logout}>Logout</button> 
        </div>
    )
}

export default Home
