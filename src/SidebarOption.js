import React from 'react';
import './SidebarOption.css';
import {useHistory} from 'react-router-dom';
import db from './firebase';

function SidebarOption({Icon,title,id , addChannelOption}) {

    // whenever you are getting back to the page or modifying 
    // the url we can use "useHistory()" hook to access the url changes
// this sends to url which then be recovered by useParams() hook
    const history = useHistory();
    const selectChannel = () => {
        if(id) {
            history.push(`/rooms/${id}`)
        }else{
            history.push(title);
        }
    };

    const addChannel = () => {
        const channelName = prompt('Please Enter the Channel Name');

        if(channelName){
            db.collection('rooms').add({
                name:channelName
            })
        }
    };

    return (
        <div className="sidebarOption" 
        onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className="sidebarOption__icon"/>}
            {Icon ? (<h3>{title}</h3>) : (<h3 className="sidebarOption__channel"> <span className="sidebarOption__hash">#</span>{title}</h3>) }
        </div>
    )
}

export default SidebarOption;
