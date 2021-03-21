import React, { useEffect, useState } from 'react';
import classes from './Login.module.css';
import firebase from 'firebase';

const Login = (props) => {
    
    const [ login, setLogin ] = useState(null);
    const [ pass, setPass ] = useState(null);
    const submit = () => {
        console.log(login, pass)
        login && pass && firebase.auth().signInWithEmailAndPassword(login, pass)
            .then( res => console.log(res)) 
            .catch(err => console.log(err))
    }
    console.log(login, pass)
    useEffect(()=> {
        const db = firebase.database();
         console.log(db);
    }, [])

    

    return(
        <div className={classes.forms}>
            <input type="text" value={login} onChange={( e ) => {setLogin(e.target.value)}} placeholder="login"/>
            <input type="text" value={pass} onChange={( e ) => {setPass(e.target.value)}} placeholder="password"/>
            <button onClick={ submit }>Submit</button>
        </div>
    )
}

export default Login;