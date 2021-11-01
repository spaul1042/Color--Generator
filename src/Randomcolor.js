import React, { Component } from 'react';
import Box from './Box';
import './Randomcolor.css';

class Randomcolor extends Component {
  static defaultProps={
    numboxes:18
  };
  render(){
  
  const x = Array.from({length:this.props.numboxes}).map( () =>(<Box/>)  );
  return (
   <div className="OuterDiv">
     {x}
   
   </div>
   
  );
  }
}

export default Randomcolor;
