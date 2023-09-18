import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import myImage from './rcv.png'; // Replace with the path to your image file
import Nav from "./Nav.js";


function App() {

  useEffect(() => {
    const spans = document.querySelectorAll('.welcome span');
    // console.log(spans)
    let delayAttr = 0
    function animateSpansReverse(delayAttr) {
      let delay = 0;
      for (let i = spans.length - 1; i >= 0; i--) {
        const span = spans[i];
        setTimeout(() => {
          span.style.animationDelay = '0s';
          span.style.animationDuration = '1s';
          span.style.animationPlayState = 'running';
        }, delay);
        delay = delay + delayAttr;
      }
    }

    var windowWidth = window.innerWidth;

    if (windowWidth < 1300) {
      // Start the animation after a 5-second delay
      delayAttr = 1000
      setTimeout(() => animateSpansReverse(delayAttr), 17000);
    }
    else{
      delayAttr = 500
      setTimeout(() => animateSpansReverse(delayAttr), 15000);
    }

  }, [])

  return (

    <div className="App">
      <Nav />
      <div class="diagonal-container">
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
      </div>
      <div className="roomba responsive-div">
        {/* <div> */}
          <div class="batteryContainer">
            <div className="batteryPercentage">80% </div>
            <div class="batteryOuter"><div id="batteryLevel"> </div></div>
            <div class="batteryBump"></div>

          </div>
          <img className="roombaImage" src={myImage} alt="Roomba" />
          <div className="textOverlay">RCV3</div>
        {/* </div> */}

      </div>
    </div>
  );
}

export default App;
