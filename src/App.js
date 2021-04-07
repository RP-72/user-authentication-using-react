import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import f from './config/fire';
import Login from './Login';
import Home from './Home';

function App(){
  const [user, setUser] = useState(null);
  useEffect(()=>{
    listener();
  },[user])

  const listener = () =>{
    f.auth().onAuthStateChanged((u) => {
      if(u){
        //console.log(u.addtionalUserInfo.isNewUser);
        setUser(u);
      }
      else{
        setUser(null);
      }
    })
  };

    return(
    <div className="App">
      {user ? (<Home/>) : (<Login/>)}
    </div>
    );
} 

export default App;
