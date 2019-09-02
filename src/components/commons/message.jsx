import React from 'react';
import { Grid } from '@material-ui/core';

const Message = ({ data: msgData }) => {

    const styles = {
        msgColor: {
            background: msgData.sender === 'bot' ? 'grey' : '#1f71bc '
        },
        msgAlign: msgData.sender === 'bot' ? "flex-start" : "flex-end"
    };

    return (
        <Grid item container justify={styles.msgAlign}>
            <div className="message" style={styles.msgColor}>
                {msgData.text}
            </div>
        </Grid>
    );
}

export default Message;