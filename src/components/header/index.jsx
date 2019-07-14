import React, { Component } from 'react'
import './index.scss'

class Head extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="head">
        <div className="wapper wapper1">网易云音乐</div>
        <div className="wapper wapper2"> </div>
        <div className="wapper wapper3"> </div>
        <div className="wapper wapper4"> </div>
      </div>
    )
  }
}

export default Head
