import React, { Component } from 'react';   
import Input from './commons/input';
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
        if(!this.state.messageData.text)
            return;
        this.props.sendMessage(this.state.messageData);
        this.resetInput();
    }

    keyPress(e){
        if(e.keyCode === 13){
          this.handleSubmit();
        }
     }

    render() { 
        console.log('props =', this.props.hideInput);
       let footerContent;
       if(!this.props.hideInput){
        footerContent = <Grid 
        container
        direction = "row"
        justify = "center"
        alignItems="center"
        style={{padding: '10px'}}
        spacing={3}>

            <Grid item style={{flexGrow:'0.9'}}>
                <Input 
                label = "Enter your message"
                type = "text"
                onChange = {this.handleChange}
                onKeyDown = {this.keyPress}
                value = {this.state.messageData.text}/>
            </Grid>
            
            <Grid item style={{flexGrow:"0.1", textAlign:'center'}}>
                <Fab size="small" onClick={this.handleSubmit} color="primary" aria-label="add">
                    <SendIcon style={{fontSize: '20px'}} />
                </Fab>
            </Grid>
        </Grid>
       }else{
           footerContent = <Grid style={{ background: '#efefef', padding: '12px', width: '100%'}}>
                <div>
                    This chat has been ended.
                </div>  
           </Grid> 
       }

        return ( 
            footerContent
        )
    }
}
 
export default ChatFooter;