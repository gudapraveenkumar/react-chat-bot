import React from 'react';

const ChatBody = (props) =>{
   
    return(
        <div style={{height: '45vh', overflow:'auto'}}>
            {
                props.chat.map((obj, index) =>{
                    return(
                        <div key={index}>{obj.text}</div>
                    )
                })
            }
        </div>
        
        
    )
}

export default ChatBody;