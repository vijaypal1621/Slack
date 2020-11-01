import React, {useEffect, useState} from 'react';
import "./Chat.css";
import Message from './Message';
import {useHistory, useParams} from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from './firebase';
// import { RvHookup } from '@material-ui/icons';


function Chat() {

    //extracting the room id which could be recovered from the URL by using useParams() hook
    const {roomId}  = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);
   // useEffect hook monitor when your windows load and changes occur
  
//    1. changes URL with useHistory() Hook
//    2. connects to databse using useEffect() and listens to the state changes using useState() hhok
//    3. Uses URL by useParams(roomId) to fetch room details from the database!
//    4. useHistory() and useParams() are from react-router-dom
//    5. useEffect() and useState() are fom react;


    useEffect(() => {
        if(roomId){
            db.collection("rooms")
              .doc(roomId)
              .onSnapshot( (snapshot)=> 
              setRoomDetails(snapshot.data()) 
              )
              db.collection('rooms').doc(roomId)
              .collection('messages')
              .orderBy('timestamp', 'asc')
              .onSnapshot((snapshot) => setRoomMessages( 
                      snapshot.docs.map(doc => doc.data() )
                  )
              )
        }
        
        
    }, [roomId]);
    console.log(roomDetails);
    console.log( "MESSAGES>>",roomMessages);
    return (

        <div className="chat">
            {/* <h2> You are in the {roomId} room </h2> */}
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p><InfoOutlinedIcon />Details</p>
                    
                </div>
            </div>
            <div className="chat__messages">
                {roomMessages.map(({message,timestamp,user,userImage})=>(
                    <Message message={message}
                             timestamp={timestamp}
                             user={user}
                             userImage={userImage} 
                    />
                ))}
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomDetails?.id} />
        </div>
    )
};

export default Chat;
