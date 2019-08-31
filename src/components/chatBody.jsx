import React from 'react';
import { Grid } from '@material-ui/core';
import { getStyle } from '../services/helper';


const ChatBody = (props) =>{
    return(
        <div style={{height: '45vh', overflow:'auto'}}>
            {
                props.chat.map((obj, index) =>{
                    return(
                        <div key={index}>
                            <Grid item container justify={obj.sender === 'bot' ? "flex-start":"flex-end"}>
                                <div style={getStyle(obj.sender)}>
                                    {obj.text}
                                </div>
                            </Grid> 
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ChatBody;