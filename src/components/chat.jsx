import React, { Component } from 'react';
import Input from './commons/input';
import { Grid } from '@material-ui/core';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import {botQuestionnaire} from '../services/botQuestionnaire';


class Chat extends Component {
   state = { 
      conversation:[],
      messageData:{
         sender: 'user',
         text: '',
         questionId: ''
      },
      questionsCount : 0,
      currentQuestion: {}
   }

   componentDidMount = () =>{
      this.sendBotQuestion();
   }

   handleChange = ({currentTarget: input}) => {
      let messageData = {...this.state.messageData};
      messageData.text = input.value;
      this.setState({ messageData});
   }

   insertMessage = (msgObj) =>{
      let {conversation} = {...this.state};
      conversation.push(msgObj);
      this.setState({conversation});  
   }

   sendBotQuestion = () =>{
      let {questionsCount, currentQuestion} = {...this.state};
      if(questionsCount < botQuestionnaire.length){
         currentQuestion = botQuestionnaire[questionsCount];
         this.insertMessage(currentQuestion);
         questionsCount++;
         this.setState({questionsCount, currentQuestion});
      }else{
         return true;
      }
   }

   sendUserAnswer = () =>{
      let {messageData, currentQuestion} = {...this.state};
      messageData.questionId = currentQuestion.questionId;
      const userMessage = {...messageData};
      this.insertMessage(userMessage);
      this.sendBotQuestion();
      this.resetInput();
   }

   resetInput = () =>{
      let {messageData} = {...this.state};
      messageData.text = "";
      messageData.questionId = "";
      this.setState({messageData});
   }

   render() {
      const {messageData, conversation} = this.state;

      return (
         <Grid 
         style={{height:'100vh', background: '#efefef'}}
         container
         direction="row"
         justify="center"
         alignItems="center">

            <Card>
               <CardHeader>
                  <div>
                     asdf
                  </div>
               </CardHeader>

               <CardContent>
                  {conversation.map((obj, index) =>{
                     return(
                        <div key={index}>{obj.text}</div>
                     )
                  })}
               </CardContent>

               <CardActions>
                  <Input 
                  type = "text"
                  name = "message"
                  label = "Enter your message"
                  onChange = {this.handleChange}
                  value = {messageData.text}/>

                  <button onClick={this.sendUserAnswer}>adsf</button>
               </CardActions>
               
            </Card>
         </Grid>
       );
   }
}

export default Chat;
