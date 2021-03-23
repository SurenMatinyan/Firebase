import React, {  useState } from 'react';
import firebase from 'firebase';
import classes from './Page.module.css';
import Get from './Get';
import Delete from './Delete';
import Page2 from './Page2';

const Page = () => {

    const [parent, setParent] = useState(null);
    const [ value, setValue] = useState(null);
    const [ name, setName ] = useState(null)
    const [num, setNum] = useState(1);


    const send = () => {
        const db = firebase.database();
        if(parent && value && name){
            const child = db.ref(parent)
            const a = name;
            child.update({[a]: value})
            setParent("");
            setValue("");
            setName("");
            alert("update");
        }
        if(parent && !value && !name){
            const ref = db.ref("asd").set("val")
        }
    }
    
   



    return(
        <div>
            <div className={classes.navi}><button onClick={ ( ) => {setNum(1)}}>Create</button><button onClick={ ( ) => {setNum(2)}}>Create data</button><button onClick={ ( ) => {setNum(3)}}>Delete</button><button onClick={ ( ) => {setNum(4)}}>Get</button></div>
           {num === 1 && <div className={classes.cont}>
                <h1>create or update parent and child</h1>
                <input value={parent} type="text" placeholder="parent name" onChange={(e) => {setParent(e.target.value)}}/>
                <h3>child</h3>
                <input value={name} type="text" placeholder="name" onChange={(e) => {setName(e.target.value)}}/>
                <input value={value} type="text" placeholder="value" onChange={(e) => {setValue(e.target.value)}}/>
                <button onClick={send}>SEND</button>
            </div>} 
            {num === 2 && <Page2 />}
            {num === 3 && <Delete />} 
            {num === 4 && <Get />}
        </div>
        
    )
}


export default Page;