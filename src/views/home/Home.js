import React, { Component } from 'react';
import HomeContent from './HomeContent';
import '../style/home.scss';

class Home extends Component {
  constructor() {
    super();
    this.state={
      aaa:5
    }
    this.vv=8
  }
  render() {
    return (
        <div>
          <div onClick={()=>this.props.abc2(this.vv++)}>超级父级1</div>
          <HomeContent/>
        </div>
    );
  }
}
export default Home;
