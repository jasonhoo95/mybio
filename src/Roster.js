import React, { Component } from 'react';
import logo from './logo.svg';
import './tinder.css';
import $ from 'jquery'
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { fadeIn, fadeOut, fadeInLeft, tada } from 'react-animations'
const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },

  fadeOut: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeOut, 'fadeOut')
  },

  fadeInLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
  },
 
  display: 'none'
}

class Page extends React.Component {
  componentWillUnmount() {
    this.props.onComponentWillUnmount();
  }
  
  render() {
    return (
      <div className="item" >
     <img width="300" height="300" src={this.props.image}   />

      </div>
    );
  }
}


class roster extends Component {



constructor(props) {
  super(props);
  this.state = {
   visible1:true,
   slideCount: 1,
   visible2:true,
   btnvisible: true,
   preventclickevents: false,
   showing: false,
   clicks: 1,
   images: [require('./pics/01.jpg'), require('./pics/02.jpg'),require('./pics/03.jpg'), require('./pics/04.jpg')],
   image: require('./pics/01.jpg')
}


}





onItemClick = () =>  {

  console.log("click");

        this.setState({ btnvisible: false });
        this.setState({ visible1: false });

 this.setState({ showing: true });

}


onNextClick = () =>  {

  console.log("click");

  if (this.state.preventclickevents) {
    return;
  }



   this.setState({image: this.state.images[this.state.clicks], clicks: this.state.clicks + 1,  preventclickevents: true});

   if (this.state.clicks >=  3){

this.setState({clicks: 0})
   }

   

     

     

}


resetClickEvents = () =>{
  this.setState({
    preventclickevents: false
  });
}


  render() {
    const { showing } = this.state;
    console.log(this.props) 
    return (
       <StyleRoot>
      <div>
       <div className="test" style={styles.fadeInLeft}>
       Welcome to All About Me Page!
      </div>


<div className="wrapper">
     <button id="button" onClick={this.onItemClick} className={this.state.btnvisible?styles.fadeIn:'fadeOut'}>Click Here To Start</button>
</div>

<div className="wrapper">
<span id="col1" className={this.state.visible1?'fadeOut':'fadeIn'}>I am A Programmer</span>
</div>






<div className="wrapper">
     <button id="btnNext" style={{ display: (showing ? 'inline-block' : 'none') }}  onClick={this.onNextClick} >Click Next</button>
</div>

<div className="image-slider">

 <ReactCSSTransitionGroup 
              transitionName = "carousel" 
              transitionEnterTimeout = {300} 
              transitionLeaveTimeout = {300}>
	<Page 
             key={this.state.image}
              image={this.state.image}
              onComponentWillUnmount={this.resetClickEvents}/>




            </ReactCSSTransitionGroup>

</div>
      </div>
      </StyleRoot>
    );
  }
}

export default roster;
