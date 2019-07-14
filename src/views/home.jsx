import React, { Component } from 'react'
import '@styles/main.scss'
import '@styles/icon/iconfont.css'
import '@styles/reset.css'
import Head from '@components/header'
import Foot from '@components/footer'

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
