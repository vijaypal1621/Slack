
import React,{useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import { useStateValue } from './StateProvider';
import Chat from './Chat';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Login from './Login';

function App() {

  // const [user,setUser] = useState(null);
  const [{ user } ,dispatch] = useStateValue();


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
                  <Route exact path="/rooms/:roomId">
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
