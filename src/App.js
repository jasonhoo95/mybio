import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import  createjs from 'createjs-module';
import $ from 'jquery'

console.log(createjs)
 class App extends Component {
constructor() {
   super();
  }
 componentDidMount() {
 
  $('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
  }

  render() {
    return (
      <div>
      <canvas ref="canvas" width="500" height="300"></canvas>
     <div className="container">
  <h1>Top right corner, click it!</h1>
  <p>View type 2 <a href="https://codepen.io/PaulVanO/pen/GgGeyE" target="_blank">here</a></p>
</div>

<div className="button_container" id="toggle">
  <span className="top"></span>
  <span className="middle"></span>
  <span className="bottom"></span>
</div>

<div className="overlay" id="overlay">
  <nav className="overlay-menu">
    <ul>
      <li ><a href="#">Home</a></li>
      <li><Link to={"roster/foo"} >About</Link></li>
      <li><Link to={"work"} >Work</Link></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</div>
</div>
    );
  }
}

export default App;
