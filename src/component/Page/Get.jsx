import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import classes from './Page.module.css';

const Get = () => {
    const [getId, setInGetId] = useState(null);
    const [data, setData] = useState(null);
    

    const handlerGetAll = () => {
        let db = "";
        db = firebase.database().ref("product");
        db.on("value", (elem) => {
            console.log(elem.val());
           return setData(elem.val());
            
        })
    }

    return(
        <div>
            <div className={classes.cont}>
                <h1>Get product</h1>
                <button onClick={handlerGetAll}>GET ALL</button>
            </div>
            { data && Object.keys(data).map((item) => <div className={classes.item}>
                <ul>
                    <li>ID {item}</li>
                    <li>NAME {data[item].name}</li>
                    <li>PRICE {data[item].price}</li>
                    <li>COUNT {data[item].count}</li>
                </ul>
                </div>) }
        </div>
        
    )
}


export default Get;