import React from 'react';
import { Grid } from '@material-ui/core';
import { getStyle } from '../../services/helper';

const Message = ({data: msgData}) => {
    return ( 
        <Grid item container justify={msgData.sender === 'bot' ? "flex-start":"flex-end"}>
            <div style={getStyle(msgData.sender)}>
                {msgData.text}
            </div>
        </Grid> 
     );
}
 
export default Message;