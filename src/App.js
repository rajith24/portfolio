import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import myImage from './rcv.png'; // Replace with the path to your image file
import Nav from "./Nav.js";


function App() {

  useEffect(() => {
    const spans = document.querySelectorAll('.welcome span');
    // console.log(spans)
    function animateSpansReverse() {
      let delay = 0;
      for (let i = spans.length - 1; i >= 0; i--) {
        const span = spans[i];
        setTimeout(() => {
          span.style.animationDelay = '0s';
          span.style.animationDuration = '0.5s';
          span.style.animationPlayState = 'running';
        }, delay);
        delay += 500;
      }
    }

    // Start the animation after a 5-second delay
    setTimeout(animateSpansReverse, 16500);
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
      <div className="roomba">
          <img className="roombaImage" src={myImage} alt="Roomba" />
      </div>
    </div>
  );
}

export default App;
