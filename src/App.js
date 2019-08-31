import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ChatContainer from './components/chatContainer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={ChatContainer}/>
        <Route path="/chat" component={ChatContainer}/>
      </Switch>
    </div>
  );
}

export default App;
