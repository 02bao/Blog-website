import React, { useState, useEffect } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import {db, auth, author} from "../firebase-config"
import { useNavigate } from 'react-router-dom'

const CreatePost = ({isAuth}) => {

  const [title, setTitle] = useState("")
  const [postText, setPostText] = useState("")
  
  const postsCollectionRef = collection(db, "posts")
  let navigate = useNavigate()
  const creatPost = async () => {
    await addDoc(postsCollectionRef, {title, 
      postText, 
      author: {name: auth.currentUser.displayName, id: auth.currentUser.uid},
     })
     navigate("/")
  }

  useEffect(()=> {
    if(!isAuth) {
     navigate("/login")

    }
  },[])

  return (
    <div className='creatPostPage'>
      <div className='cpContainer'>
        <h1>Create A Post</h1>
        <div className='inputGp'>
          <label>Title:</label>
          <input placeholder='Title...'  
          onChange={(event) => {
            setTitle(event.target.value)
          }}/>
        </div>
        <div className='inputGp'>
        <label>Post:</label>
        <textarea placeholder='Post...' 
        onChange={(event) => {
            setPostText(event.target.value)
          }}/>
        </div>
        <button onClick={creatPost}>Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost