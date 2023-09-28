import logo from './logo.svg';
import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import Nav from "./Nav.js";
import ProgrammerModel from './programmer.js';
import CustomComponent from './customComponent';


function App() {

  const [welcomeAnimationLoaded, setWelcomeAnimationLoaded] = useState(true);


  useEffect(() => {
      setTimeout(() =>{
        setWelcomeAnimationLoaded(true);
      },5000)

  }, [])

  return (
<React.Fragment>
    <ProgrammerModel/>
    {/* <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3"> */}
    <div className="App">
      {welcomeAnimationLoaded ? 
        <React.Fragment>
          {/* <div className="my-div"> */}
          
          <CustomComponent/>
          
          {/* </div> */}
          
        </React.Fragment>
      
      : <div class="diagonal-container">
      <div class="left-half"></div>
      <div class="right-half"></div>
      <h2 className="welcome">
        <span>W</span>
        <span>E</span>
        <span>L</span>
        <span>C</span>
        <span>O</span>
        <span>M</span>
        <span>E</span>
      </h2>
    </div>}
          
      
    </div>
    {/* </div> */}
    </React.Fragment>
  );
}

export default App;
