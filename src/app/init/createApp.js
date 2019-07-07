import React, { Component } from 'react';
import { hot } from 'react-hot-loader';


class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    };
  }

  setNum =() => {
    const { num } = this.state;
    this.setState({ num: num + 1 });
  }

  render() {
    const { num } = this.state;
    return (
      <div>
        <div key="1">{num}</div>
        <div key="11" onClick={this.setNum}>click1256623383337</div>
        <div key="122">TTT1</div>
      </div>
    );
  }
}

// export default (Router);
export default hot(module)(Router);
