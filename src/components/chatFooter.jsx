import React, { Component } from 'react';   
import Input from './commons/input';


class ChatFooter extends Component {
    state = { 
        messageData:{
            sender: 'user',
            text: '',
            questionId: ''
        }
    }

    handleChange = ({currentTarget: input}) => {
        let messageData = {...this.state.messageData};
        messageData.text = input.value;
        this.setState({ messageData});
    }

    resetInput = () =>{
        let {messageData} = {...this.state};
        messageData.text = "";
        messageData.questionId = "";
        this.setState({messageData});
    }

    handleSubmit = () =>{
        this.props.sendMessage(this.state.messageData);
        this.resetInput();
    }

    render() { 
        let content;
        if(!this.props.hideInput){
            content = <div>
                <Input 
                type = "text"
                name = "message"
                label = "Enter your message"
                onChange = {this.handleChange}
                value = {this.state.messageData.text}/>
                <button onClick={this.handleSubmit}>Send</button>
            </div>
        }else{
            content = <div>Thank you for the information. We will get back to you in two working days.</div>
        }
        return ( 
          content
        );
    }
}
 
export default ChatFooter;