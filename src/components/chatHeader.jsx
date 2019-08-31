import React from 'react';
import ChatIcon from '@material-ui/icons/Chat';


const ChatHeader = () => {
    return ( 
        <h2 style={{fontWeight: '500', textAlign: 'center'}}>
           <ChatIcon style={{fontSize: '20px'}} /> Carla Chat Bot
        </h2>
    );
}
 
export default ChatHeader;