
import React,{useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import Chat from './Chat';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Login from './Login';

function App() {

  const [user,setUser] = useState(null);


  return (
    <div className="app">
      <Router>
        {
          !user ? (<Login />) : 
          (
           <>
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
          </>
         )}
        </Router>
   </div>
  );
}

export default App;
