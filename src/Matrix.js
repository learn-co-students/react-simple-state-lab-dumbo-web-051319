import React, { Component } from 'react';
import Cell from './Cell.js'
import { patternDefault } from './data.js'

export default class Matrix extends Component {

  genRow = (values) => (
    values.map(value => <Cell value={value}/> // replace me and render a cell component instead!
  ))

  genMatrix = () => {
    return this.props.values.map(rowValues =>
      <div className="row"> {this.genRow(rowValues)}</div>)
  }

  render() {
    return (
      <div id="matrix" defaultProps={this.defaulProps}>
        {this.genMatrix()}
      </div>
    )
  }

}

Matrix.defaultProps= {
  values: patternDefault
}
