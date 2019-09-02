import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { botQuestionnaire } from '../schema/botQuestionnaire';
import ChatFooter from './chatFooter';
import ChatBody from './chatBody';
import ChatHeader from './chatHeader';
import '../App.css';

class ChatContainer extends Component {
   state = {
      conversation: [],
      questionsCount: 0,
      currentQuestion: {},
      questionsFinished: false
   }

   componentDidMount = () => {
      this.postBotMessage();
   }

   isQuestionsFinished = () => {
      let { questionsCount } = { ...this.state };
      return questionsCount === botQuestionnaire.length;
   }

   scrollToLatestMsg = () => {
      this.el.scrollIntoView({ behavior: 'smooth' });
   }

   componentDidUpdate = () => {
      this.scrollToLatestMsg();
   }

   /**
    * Push a message into the conversation
    */
   insertMessage = (msgObj) => {
      const { conversation } = { ...this.state };
      conversation.push(msgObj);
      this.setState({ conversation });
   }

   /**
    * Function for Bot asking predefined questions to the User in the form of message
    */
   postBotMessage = () => {
      let { questionsCount, currentQuestion } = { ...this.state };
      currentQuestion = botQuestionnaire[questionsCount];
      questionsCount++;
      this.insertMessage(currentQuestion);
      this.setState({ questionsCount, currentQuestion });
   }

   /**
    * Function for User to answer the question in the form of message
    */
   postUserMessage = (msgObj) => {
      const { currentQuestion } = { ...this.state };
      msgObj.questionId = currentQuestion.questionId;
      this.insertMessage(msgObj);
      this.postBotMessage();
   }

   render() {
      const { conversation } = this.state;

      return (
         <Grid className="chat-container"
            container
            direction="row"
            justify="center"
            alignItems="center">

            <Grid item xs={12} sm={9} md={5} >
               <ChatHeader />
               <Card>

                  <CardContent className="chat-body">
                     <ChatBody chat={conversation} />
                     <div ref={el => { this.el = el; }} />
                  </CardContent>

                  <CardActions>
                     <ChatFooter
                        hideInput={this.isQuestionsFinished()}
                        sendMessage={this.postUserMessage} />
                  </CardActions>
               </Card>
            </Grid>
         </Grid>
      );
   }
}

export default ChatContainer;
