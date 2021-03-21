import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import classes from './Page.module.css';
import Get from './Get';
import Delete from './Delete';
import {  NavLink } from 'react-router-dom';

const Page = () => {

    const [name, setName] = useState(null);
    const [price, setPrice] = useState(null);
    const [count, setCount] = useState(null);
    const [num, setNum] = useState(1);

    useEffect(() => {
        const db = firebase.database();
        const product = db.ref("product");
        product.on("value", elem => console.log(elem.val()))
    }, [])

    const send = () => {
        if(name && price && count ){
            const key = "product";
            const value = {name, price, count}
            const db = firebase.database()
            db.ref(key).push(value)
            alert("product Create")
        }
    }
    
   



    return(
        <div>
            <div className={classes.navi}><button onClick={ ( ) => {setNum(1)}}>Create</button><button onClick={ ( ) => {setNum(2)}}>Delete</button><button onClick={ ( ) => {setNum(3)}}>Get</button></div>
           {num === 1 && <div className={classes.cont}>
                <h1>create product</h1>
                <input value={name} type="text" placeholder="name" onChange={(e) => {setName(e.target.value)}}/>
                <input value={price} type="text" placeholder="price" onChange={(e) => {setPrice(e.target.value)}}/>
                <input value={count} type="text" placeholder="count" onChange={(e) => {setCount(e.target.value)}}/>
                <button onClick={send}>SEND</button>
            </div>} 
            {num === 2 && <Delete />} 
            {num === 3 && <Get />}
        </div>
        
    )
}


export default Page;