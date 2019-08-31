import React, { Component } from 'react';   
import Input from './commons/input';
import { Grid } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';


class ChatFooter extends Component {
    state = { 
        messageData:{
            sender: 'user',
            text: '',
            questionId: ''
        }
    }

    handleChange = ({currentTarget: input}) => {
        const messageData = {...this.state.messageData};
        messageData.text = input.value;
        this.setState({ messageData});
    }

    resetInput = () =>{
        const {messageData} = {...this.state};
        messageData.text = "";
        messageData.questionId = "";
        this.setState({messageData});
    }

    handleSubmit = () =>{
        if(this.state.messageData.text){
            this.props.sendMessage(this.state.messageData);
            this.resetInput();
        }else{
            return;
        }
       
    }

    render() { 
        let content;
        if(!this.props.hideInput){
            content = <Grid 
            container
            direction = "row"
            justify = "center"
            alignItems="center"
            style={{padding: '10px'}}
            spacing={3}>
                <Grid item style={{flexGrow:'0.9'}}>
                    <Input 
                    type = "text"
                    name = "message"
                    placeholder = "Enter your message"
                    onChange = {this.handleChange}
                    value = {this.state.messageData.text}/>
                </Grid>
                <Grid item style={{flexGrow:"0.1", textAlign:'center'}}>
                    <Fab size="small" onClick={this.handleSubmit} color="primary" aria-label="add">
                        <SendIcon style={{fontSize: '20px'}} />
                    </Fab>
                </Grid>
                
            </Grid>
        }else{
            content = <div>Thank you for the information. We will get back to you in two working days.</div>
        }
        return ( 
          content
        );
    }
}
 
export default ChatFooter;