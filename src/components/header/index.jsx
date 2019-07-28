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
        <div className="wapper wapper2">
          <div className="w1">
            <span className="iconfont icon-arrowleft" />
            <span className="iconfont icon-arrowright" />
          </div>
          <div className="w2">
            <input type="text" placeholder="搜索音乐，视频，歌词，电台" />
            <span className="iconfont icon-search" />
          </div>
          <div className="w3">
            <img
              src="https://img3.doubanio.com/view/photo/l/public/p2216650995.webp"
              alt=""
            />
            <span>狂凌博</span>
            <i className="iconfont icon-xiala" />
            <em>开通VIP</em>
          </div>
        </div>
        <div className="wapper wapper3">
          <div>
            <span className="iconfont icon-xiala" />
            <span className="iconfont icon-xiala" />
            <span className="iconfont icon-xiala" />
          </div>
          <div>
            <span className="iconfont icon-xiala" />
            <span className="iconfont icon-xiala" />
            <span className="iconfont icon-xiala" />
          </div>
        </div>
      </div>
    )
  }
}

export default Head
