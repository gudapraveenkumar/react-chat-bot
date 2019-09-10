import React from 'react';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import { Grid } from '@material-ui/core';
import './chat.css';

const ChatHeader = () => {

    return (
        <Grid className="header-container"
            container
            direction="row"
            justify="center"
            alignItems="center">
            <PersonOutlinedIcon className="header-icon" />
            <div className='header-text'>Chat Bot</div>
        </Grid>

    );
}

export default ChatHeader;