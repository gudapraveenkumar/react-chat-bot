import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Chat from './components/chat';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Chat}/>
        <Route path="/chat" component={Chat}/>
      </Switch>
    </div>
  );
}

export default App;
