import React, { Component } from 'react';
import './index.css';
import Radium, {StyleRoot} from 'radium';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import TypeWriter from 'react-typewriter';
import Typist from 'react-typist';

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


const Child = () => (
<div>
      Hello, World!
  </div>
  )


 class Work extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imgvisible:false

    }
  }

onNextClick = () => {
  this.setState({ imgvisible: true })
}

render() {
  const {children, timeout, ...props} = this.props;

    return (
      <div style={{textAlign:'center',height:'100vh',overflow:'auto', overflowX:'hidden'}} className="work"> 
     <div className="col1 pulse">
     <TypeWriter typing={1}>
     <span className="boxContainer">
     
Hi my name is <span>Jason Hoo</span> and I am a programmer in croxlabs..

<br/>
       </span>
       </TypeWriter>
       </div>

       <br/>
       <div className="workbox">
       <TypeWriter typing={1}  onTypingEnd={() => {this.setState({imgvisible:true})}}>
       <span className="boxContainer1">
   I work before at IFAST which is a financial corporation as an intern. And I had learnt a lot of stuff at
   there.
   </span>

      </TypeWriter>


<div>
  

{
this.state.imgvisible &&

<img className="fadeinUp" style={{display:'block',margin:'auto'}} src={require('./pics/ifast.png')}
width="400"
height="200">

</img>

}

  </div>



         </div>

          <div className="workbox">
       <TypeWriter typing={1} onTypingEnd={() => {this.setState({imgvisible:true})}}>
       <span className="boxContainer1">
   I work before at Commercial Info Centre sdn bhd as a software engineer to develop the company Taxi App which is Ezcab..
   </span>
   </TypeWriter>

   <div>

{
  this.state.imgvisible &&
  
  <img className="fadeinUp" style={{display:'block',margin:'auto'}} src={require('./pics/commercialinfo.png')}
  width="300"
  height="100">
  
  </img>
  
  }

     </div>


         </div>

            <div className="workbox">
       <TypeWriter typing={1}>
       <span className="boxContainer2">
      
       I work at Croxlabs sdn bhd as software developer to help develop mobile apps and website using <span style={{backgroundColor: '#FFFF00'}}>React Native</span>, node.js and php programming langauges.
     
       </span>

<br/>

<div>
This is some of my company project that I did..
  </div>
        
        <div style={{display:'inline-block', marginTop:15, textAlign:'left'}}>
       <p>1.Mobicomm</p>
       <p>2.LinkxChange</p>
       <p>3.Score Board</p>
       </div>


  
   </TypeWriter>


         </div>
        
        
        

          <div className="workbox">
   
          <p className="fadeinUp">
Main Programming Skills:
  </p>
  <div style={{ margin: '0px auto',
    textAlign: 'center'}}>
  <div className="one">React Native</div>
<div className="one">Php</div>
<div className="one">Node.js</div>
<div className="one">Ios</div>
<div className="one">Objective-c</div>
</div>
         </div>





</div>
    );
  }


}




 	export default Work;
