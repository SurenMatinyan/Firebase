import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import classes from './Page.module.css';

const Delete = () => {
    const [delId, setDelId] = useState(null);
    const delet = () => {
        if(delId) {
            let db = firebase.database().ref("product");
            db.child(delId).remove(); 
            alert("DELETE")
        }
    }

    return(
        <div>
            <div className={classes.cont}>
                <h1>delete product</h1>
                <input value={delId} type="text" placeholder="id" onChange={(e) => {setDelId(e.target.value)}}/>
                <button onClick={delet}>DELETE</button>
            </div>
        </div>
        
    )
}


export default Delete;