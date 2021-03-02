import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import React, { useState } from 'react'
import './MessageSender.css'
import { useStateValue } from './StateProvider'
import db from './firebase'
import firebase from 'firebase'


function MessageSender() {

    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        setInput('')
        setImageUrl('')
    } 


    return (
        <div className = "messages">
            <div className = "messages_top">
                <Avatar 
                        src = {user.photoURL}

                />
                <form>
                    <input 
                        value = {input}
                        onChange = { (e) => setInput(e.target.value)}
                        className = "messages_input"
                        placeholder = {`What's on your mind, ${user.displayName} ?`}
                    />
                    <input 
                        value = {imageUrl}
                        onChange = { (e) => setImageUrl(e.target.value)}
                        placeholder = "image URL (optional)"
                    />
                    <button onClick = {handleSubmit} type = "submit">Hidden Submit</button>
                </form>
            </div>
            <div className = "messages_bottom">
                 <div className = "messages_options">
                    <VideocamIcon style = {{ color: "red"}}/>
                    <h3>Live video</h3>
                 </div>
                 <div className = "messages_options">
                    <PhotoLibraryIcon style = {{ color: "green"}} />
                    <h3>Photo/Video</h3>
                 </div>
                 <div className = "messages_options">
                    <InsertEmoticonIcon style = {{ color: "orange"}}/>
                    <h3>Feeling/Activity</h3>
                 </div>        
            </div>
        </div>
    )
}

export default MessageSender