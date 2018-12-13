import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './views/home'
import One from './views/one'
import Two from './views/two'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <a href="/home">家</a>
          <a href="/one">one</a>
          <a href="/two">two</a>
          <br />
          <Link to="home"> 家</Link>
          <Link to="one"> 产品</Link>
          <Link to="two">我们</Link>
          <br />
          <Route path="/home" component={Home} />
          <Route path="/one" component={One} />
          <Route path="/two" component={Two} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
