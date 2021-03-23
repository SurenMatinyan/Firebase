import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import classes from './Page.module.css';

const Get = () => {
    const [id, setId] = useState(null);
    const [data, setData] = useState(null);
    

    const handlerGetAll = () => {
        let db = "";
        db = firebase.database().ref(id);
        db.on("value", (elem) => {
            console.log(elem.val())
           return setData(elem.val());  
        })
    }

    return(
        <div>
            <div className={classes.cont}>
                <h1>get parent</h1>
                <input type="text" placeholder="data id"  value={id} onChange={(e)=> {setId(e.target.value)}} />
                <button onClick={handlerGetAll}>GET</button>
            </div>
            { data && Object.keys(data).map(item => <div className={classes.item}>
                <ul>
                    <li>name {item}</li>
                    <li>value {data[item]}</li>
                </ul>
                </div>) }
        </div>
        
    )
}


export default Get;