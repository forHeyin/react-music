import React, { Component } from 'react';

import '../styles/homePage.scss'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="homePage">
                <a href="baidu.com">百度000</a>
            </div>
        );
    }
}

export default Home;