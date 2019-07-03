import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './views/home'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="test">
          <Route path="/home" component={Home} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
