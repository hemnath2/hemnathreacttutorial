import React, { Component } from 'react';

export default class Comhtml extends Component {

    constructor(){
        super();
        this.state={
            data:0
        }
    }

    change=()=>{
        this.setState({data:1})
    }

  render() {
    return (
      <div>
        <h2>HTML file</h2>
        <iframe src='home.html'></iframe>
        <h2>React JS file</h2>
        <h3>{this.state.data===0? "Home Page":"Index Page"}</h3>
        <button onClick={this.change}>click</button>
        
      </div>
    )
  }
}
