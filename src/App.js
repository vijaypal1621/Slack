
import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import Chat from './Chat';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
            {/* Sidebar */}
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat/>
              </Route>
              <Route path="/">
                <Chat/>
              </Route>
            </Switch>

            {/* React-Router ->chat-screen*/}
        </div>
        </Router>
   </div>
  );
}

export default App;
