import React, { useState } from 'react';
import classes from './SignUp.module.css';
import firebase from 'firebase';


const SignUp = () => {

  const [ login, setLogin ] = useState(null);
  const [ pass, setPass ] = useState(null);
  
  const submit = () => {
    console.log("create")
    login && pass && firebase.auth().createUserWithEmailAndPassword(login, pass)
      .then(res => console.log(res))
      .catch(err => console.log(err));
     
}

  return (
    <div>
        <div className={classes.forms}>
            <input type="text" value={login} onChange={( e ) => {setLogin(e.target.value)}} placeholder="login"/>
            <input type="text" value={pass} onChange={( e ) => {setPass(e.target.value)}} placeholder="password"/>
            <button onClick={ submit }>Submit</button>
        </div>
    </div>
  )
}

  export default SignUp;