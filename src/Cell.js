import React from 'react';

export default class Cell extends React.Component{

  constructor(props){
    super(props)
    this.state={
      color: this.props.value
    }
  }

  changeStyle = () => {
    this.setState({
      color: '#333'
    })
  }

  render(){
    // debugger
    return  (
      <div
      onClick={this.changeStyle}
      className= 'cell' style={{backgroundColor:this.state.color}}>
      </div>
    )
  }
}
