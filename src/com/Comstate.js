import React, { Component } from 'react'

class Comstate extends React.Component {
    constructor(props) {
      super(props);
    this.state = {brand: "Ford"};
    }
    render() {
      return (
        <div>
          <h1>{this.state.brand}</h1>
        </div>
      );
    }
  }

  export default Comstate;