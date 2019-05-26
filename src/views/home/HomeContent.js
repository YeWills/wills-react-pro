import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.num =1;
    this.state = {
        co: {},
        tiv:'ppp',
        iflag:true,
    }
    this.cssd={}
  }

  changeF = (e)=>{
    this.setState({tiv:e.target.value,iflag:!this.state.iflag})
  }
  content(){
    if(this.state.iflag){
      return <input  key={99} value={this.state.tiv} onChange={this.changeF}/>
    }
    return <input  key={9999} value={this.state.tiv} onChange={this.changeF}/>
  }
  render() {
      return (
        <div className="container" style={{background:'grey',padding:'20px'}}>
          <div onClick={()=>this.props.qqw(++this.num)}>fa组件--点击触发tyy</div>
          <div onClick={()=>this.props.noa(++this.num)}>点击触发nono</div>
          <div onClick={()=>this.props.abc(++this.num)}>点击触发add</div>
        </div>
    );
  }
}
const faActionCreators = {
    abc:aaa=>{
        console.log(9232666);
        return {
            type:'ADD',
            text:aaa,
        }
    },
    qqw:aaa=>({
        type:'TYY',
        text:aaa,
    }),
    noa:aaa=>({
        type:'nono',
        text:aaa,
    })
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(faActionCreators, dispatch);
};
const mapStateToProps = (state)=>{
    return ({addRedux:state.addRedux})
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeContent);



