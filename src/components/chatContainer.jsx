import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import {botQuestionnaire} from '../schema/botQuestionnaire';
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
      const {conversation} = {...this.state};
      conversation.push(msgObj);
      this.setState({conversation});  
      console.log('scrolled');
      this.el.scrollIntoView({ behavior: 'smooth' });
   }

   sendBotQuestion = () =>{
      let {questionsCount, questionsFinished, currentQuestion} = {...this.state};
      currentQuestion = botQuestionnaire[questionsCount];
      questionsCount++;
      if(questionsCount === botQuestionnaire.length)
         questionsFinished = true;
      this.insertMessage(currentQuestion);
      this.setState({questionsCount, questionsFinished, currentQuestion});
   }

   sendUserAnswer = (msgObj) =>{
      const {currentQuestion} = {...this.state};
      msgObj.questionId = currentQuestion.questionId;
      const userMessage = {...msgObj};
      this.insertMessage(userMessage);
      this.sendBotQuestion();
   }

   render() {
      const {conversation, questionsFinished} = this.state;
        
      return (
         <Grid 
         style={{height:'100vh',padding:'10px'}}
         container
         direction="row"
         justify="center"
         alignItems="center">
            
            <Grid item xs={12} sm={9} md={5} >
            <ChatHeader/>
               <Card>
                  <CardContent style={{height: '50vh', overflow:'auto'}}>
                     <ChatBody chat = {conversation}/>
                     <div ref={el => { this.el = el; }} />
                  </CardContent>

                  <CardActions>
                     <ChatFooter 
                        hideInput = {questionsFinished}
                        sendMessage = {this.sendUserAnswer}/>
                  </CardActions>
               </Card>
            </Grid>
            
         </Grid>
       );
   }
}

export default ChatContainer;
