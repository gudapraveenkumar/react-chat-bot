import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { botQuestionnaire } from '../../schema/botQuestionnaire';
import ChatFooter from './chatFooter';
import ChatBody from './chatBody';
import ChatHeader from './chatHeader';
import './chat.css';

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
      return this.state.questionsCount === botQuestionnaire.length;
   }

   scrollToLatestMsg = () => {
      this.el.scrollIntoView({ behavior: 'smooth' });
   }

   componentDidUpdate = () => {
      this.scrollToLatestMsg();
   }

   addMessage = (msgObj) => {
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
      this.addMessage(currentQuestion);
      this.setState({ questionsCount, currentQuestion });
   }

   /**
    * Function for User to answer the question in the form of message
    */
   postUserMessage = (msgObj) => {
      const { currentQuestion } = { ...this.state };
      msgObj['questionId'] = currentQuestion.questionId;
      msgObj['sender'] = 'user';
      this.addMessage(msgObj);
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
                     {/* Element at the bottom */}
                     <div ref={el => { this.el = el; }} />
                  </CardContent>

                  <CardActions>
                     <ChatFooter
                        chatbotIsFinished={this.isQuestionsFinished()}
                        sendMessage={this.postUserMessage} />
                  </CardActions>
               </Card>
            </Grid>
         </Grid>
      );
   }
}

export default ChatContainer;
