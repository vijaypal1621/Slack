import React,{useState} from 'react';
import './ChatInput.css';
import db from './firebase';
import { useStateValue } from './StateProvider';



function ChatInput({channelName , channelId}) {

    const [input , setInput] = useState('');
    const [{user}] = useStateValue();
    console.log(user.uid);
    const sendMessage = (e) => {
        console.log(channelId);
        e.preventDefault();
        if(channelId){
            db.collection('rooms').doc(channelId)
              .collection('messages').add({
                    id:user?.uid,
                    message:input,
                    timestamp:new Date() ,
                    user:user.displayName,
                    userImage:user.photoURL
                }
            )
            .then(function() {
                console.log("Document successfully updated!");
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
            
        }
        setInput('');
    };

    return (
        <div className="chatInput">
            <form>
                <input 
                value={input}
                onChange= {e => setInput(e.target.value)}
                placeholder={`Message at #${channelName}`} />
                <button type="submit" onClick={sendMessage} >
                    SEND
                </button>
            </form>
        </div>
    )
}

export default ChatInput;

