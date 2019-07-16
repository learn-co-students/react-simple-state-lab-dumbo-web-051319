import React, { Component } from 'react';

class Cell extends Component {

constructor(props){
  super(props)
  this.state = {
    color: this.props.value
  }
}

handleEvent = (e)=> {
  const newColor = "#333"
  this.setState({
    color: newColor
  })
}


render(){

  return (<div  onClick={this.handleEvent}  className="cell"  style={{backgroundColor: this.state.color}} />)
}

}
export default Cell
