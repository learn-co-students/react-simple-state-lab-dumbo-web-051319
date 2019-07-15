import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: props.value
    }
    // ...define initial state with a key of 'color' set to the 'value' prop
  }

  changeColor = () => {
    const newColor = this.state.color = "#333"
    this.setState({
      color: newColor
    })
  }


  render() {
    console.log(this.state.color);
    return (
      <div onClick={this.changeColor} className="cell" style={{backgroundColor: `${this.state.color}`}}/>
    )
  }

}
