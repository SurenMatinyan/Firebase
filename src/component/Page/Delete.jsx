import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import classes from './Page.module.css';

const Delete = () => {
    const [parentId, setParentId] = useState(null);
    const [delId, setDelId] = useState(null);
    const delet = () => {
            let db = firebase.database().ref(parentId)
             if(parentId && delId) {
               db.child(delId).remove(); 
               alert("DELETE");
               setParentId("");
                setDelId("");
             }        
    }

    return(
        <div>
            <div className={classes.cont}>
                <h1>remove tree</h1>
                <input value={parentId} type="text" placeholder="parent id" onChange={(e) => {setParentId(e.target.value)}}/>
                <input value={delId} type="text" placeholder="child id" onChange={(e) => {setDelId(e.target.value)}}/>
                <button onClick={delet}>DELETE</button>
            </div>
        </div>
        
    )
}


export default Delete;