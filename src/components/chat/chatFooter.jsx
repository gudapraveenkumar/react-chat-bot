import React, { Component } from 'react';
import Input from '../commons/input';
import { Grid } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

class ChatFooter extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }

    state = {
        messageData: {
            text: '',
            questionId: ''
        }
    }

    handleChange = ({ currentTarget: input }) => {
        const messageData = { ...this.state.messageData };
        messageData.text = input.value;
        this.setState({ messageData });
    }

    /**
     * Reset input field after posting the message
     */
    resetInput = () => {
        const { messageData } = { ...this.state };
        messageData.text = "";
        messageData.questionId = "";
        this.setState({ messageData });
    }

    /**
     * Post message to the Bot
     */
    postMessage = () => {
        if (!this.state.messageData.text)
            return;
        const data = { ...this.state.messageData };
        this.props.sendMessage({ ...data, sender: 'user' });
        this.resetInput();
    }

    /**
     * Function to post message if the user press 'Enter'
     */
    keyPress(e) {
        if (e.keyCode === 13) {
            this.postMessage();
        }
    }

    render() {
        return (
            <React.Fragment>
                {!this.props.hideInput && <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{ padding: '10px' }}
                    spacing={3}>

                    <Grid item className="chat-input-container">
                        <Input
                            label="Enter your message"
                            type="text"
                            onChange={this.handleChange}
                            onKeyDown={this.keyPress}
                            value={this.state.messageData.text} />
                    </Grid>

                    <Grid item className="send-btn-container">
                        <Fab size="small" onClick={this.postMessage} color="primary" aria-label="add">
                            <SendIcon className="send-btn-icon" />
                        </Fab>
                    </Grid>

                </Grid>}

                {this.props.hideInput && <Grid className="chat-end-info">
                    <div>
                        This chat has been ended.
                    </div>
                </Grid>
                }
            </React.Fragment>
        )
    }
}

export default ChatFooter;