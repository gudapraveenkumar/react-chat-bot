import React, { Component } from 'react';
import { Grid, CardHeader } from '@material-ui/core';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import {botQuestionnaire} from '../services/botQuestionnaire';
import ChatFooter from './chatFooter';
import ChatBody from './chatBody';
import ChatHeader from './chatHeader';


class ChatContainer extends Component {
   state = { 
      conversation:[],
      questionsCount : 0,
      currentQuestion: {},
      botTyping: true,
      questionsFinished: false
   }

   componentDidMount = () =>{
      this.sendBotQuestion();
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
         let questionsFinished = {...this.state};
         questionsFinished = true;
         this.setState({questionsFinished});
         return true;
      }
   }

   sendUserAnswer = (msgObj) =>{
      let {currentQuestion} = {...this.state};
      msgObj.questionId = currentQuestion.questionId;
      const userMessage = {...msgObj};
      this.insertMessage(userMessage);
      this.sendBotQuestion();
   }

   render() {
      const {conversation, questionsFinished} = this.state;
        
      return (
         <Grid 
         style={{height:'100vh', background: '#efefef'}}
         container
         direction="row"
         justify="center"
         alignItems="center">
            <Card>
              
                  <ChatHeader/>
              

               <CardContent>
                  <ChatBody chat = {conversation}/>
               </CardContent>

               <CardActions>
                  <ChatFooter 
                     hideInput = {questionsFinished}
                     sendMessage = {this.sendUserAnswer}/>
               </CardActions>
            </Card>
         </Grid>
       );
   }
}

export default ChatContainer;
