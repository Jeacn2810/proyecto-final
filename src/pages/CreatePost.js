import React, { useState,useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import {useNavigate} from "react-router-dom";


function Createpost({ isAuth }) {
    const[title,setTitle]= useState("")
    const[postText,setPostText]= useState("")
    
    const postCollectionRef = collection(db,"posts")
    let navigate = useNavigate();

    const createpost = async () => {
        await addDoc (postCollectionRef, {
            title, 
            postText,
             author: {name: auth.currentUser.displayName, id: auth.currentUser.uid},
            });
            navigate("/");
    };
    useEffect (() => {
       if (!isAuth) {
        navigate("/login");
       }
            
    },[]);


    return (
    <div className="createPostPage"> 
        <div className="cpContainer">
           <h1>Crea tu post</h1>
        <div className="inputGp">
            <label> titulo: </label>
            <input placeholder="titulo..." onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
            <label>Post:</label>
            <textarea placeholder="Post..." onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createpost}>Publicar Post</button>
    </div>
</div>
    );
}

export default Createpost;