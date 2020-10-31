
import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';


function App() {
  return (
    <div className="App">
        <Header />
       <div className="app__body">
           {/* Sidebar */}
           <Sidebar />
           {/* React-Router ->chat-screen*/}
       </div>
   </div>
  );
}

export default App;
