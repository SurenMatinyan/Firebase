import React, {  useState } from 'react';
import firebase from 'firebase';
import classes from './Page.module.css'

const Page2 = () => {

    const [dataName, setdataName] = useState(null);
    const [ dataValue, setdataValue] = useState(null);
    
    const send = () => {
        const db = firebase.database();
        if(dataName && dataValue){
            const ref = db.ref(dataName).set(dataValue);
            alert("create data");
        }
    }
    
   



    return(
        <div className={classes.cont}>
                <h1>SET DATA</h1>
                <input value={dataName} type="text" placeholder="data name" onChange={(e) => {setdataName(e.target.value)}}/>
                <input value={dataValue} type="text" placeholder="data value" onChange={(e) => {setdataValue(e.target.value)}}/>
                <button onClick={send}>SEND</button>
        </div>
            
        
    )
}


export default Page2;