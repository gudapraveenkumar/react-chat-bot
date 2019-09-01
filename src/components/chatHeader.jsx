import React from 'react';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import { Grid } from '@material-ui/core';

const ChatHeader = () => {

    const styles = {
        iconStyle:{
            fontSize: '20px',
            borderRadius: '50%',
            border: '1px solid white',
            padding: '6px',
            background: '#1f6eb7',
            color: 'white'
        },
        botName:{
            fontWeight: '300',
            marginLeft: '10px',
            fontSize: '28px',
            color: 'white'
        }
    }

    return ( 
        <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        style={{padding:'10px'}}>
            <PersonOutlinedIcon style={styles.iconStyle} />
            <div style={styles.botName}>Carla Chat Bot</div>
        </Grid>
        
    );
}
 
export default ChatHeader;