
import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
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
                {/* <Chat/> */}
              </Route>
              <Route path="/">
                <h1>Welcome</h1>
              </Route>
            </Switch>

            {/* React-Router ->chat-screen*/}
        </div>
        </Router>
   </div>
  );
}

export default App;
