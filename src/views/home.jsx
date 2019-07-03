import React, { Component } from 'react'
import '../styles/main.scss'
import Head from '../componets/header'
import Foot from '../componets/footer'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="mian">
        <Head />
        <div className="content"> </div>
        <Foot />
      </div>
    )
  }
}

export default Home
