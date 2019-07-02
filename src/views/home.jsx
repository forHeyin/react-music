import React, { Component } from 'react'
import '../styles/main.scss'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: []
    }
    this.cstat = 444
  }

  render() {
    return (
      <div className="mian">
        <div>我是单色</div>
      </div>
    )
  }
}

export default Home
