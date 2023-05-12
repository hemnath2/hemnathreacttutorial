import React,{Component} from 'react'
import Comstate from "./com/Comstate";
import Componentclass from './com/Componentclass';
import ComFunction from './com/ComFunction';
import Comjst from './com/Comjst';
import Comprops from './com/Comprops';
import Comhtml from './com/Comhtml';
import Comus from "./com/Comus";
import App from './App';
import './index.css'

class Data extends Component{
    render(){
      return(
        <div>
           <center>
           <h1>Home Page</h1>
           <hr></hr>
           <h2>Default React page</h2>
           <button onClick={this.props.eight}>click here</button>
           <hr width="500px"></hr>
           <h2>HTML vs React JS</h2>
           <button onClick={this.props.six}>click here</button>
           <hr width="600px"></hr>
           <h2>Class Component Output</h2>
           <button onClick={this.props.one}>click here</button>
           <hr width="500px"></hr>
           <h2>Functional Component Output</h2>
           <button onClick={this.props.two}>click here</button>
           <hr width="600px"></hr>
           <h2>JSX Output</h2>
           <button onClick={this.props.three}>click here</button>
           <hr width="500px"></hr>
           <h2>Props Output</h2>
           <button onClick={this.props.four}>click here</button>
           <hr width="600px"></hr>
           <h2>State Output</h2>
           <button onClick={this.props.five}>click here</button>
           <hr width="500px"></hr>
           <h2>useState Hooks Output</h2>
           <button onClick={this.props.seven}>click here</button>
           <hr width="600px"></hr>
           </center>
        </div>
        )
    }
  }

export default class Home extends Component {
    constructor(props){
    	super(props);
      this.state ={
        value:0
      }
    }

    zero=()=>{
      this.setState({
        value:0
      })
    }

      one=()=>{
        this.setState({
          value:1
        })
    }

    two=()=>{
        this.setState({
          value:2
        })
    }

    three=()=>{
        this.setState({
          value:3
        })
    }

    four=()=>{
        this.setState({
          value:4
        })
    }

    five=()=>{
        this.setState({
          value:5
        })
    }

    six=()=>{
        this.setState({
          value:6
        })
    }

    seven=()=>{
        this.setState({
          value:7
        })
    }

    eight=()=>{
        this.setState({
          value:8
        })
    }



    
  render() {
    let a = this.state.value;
    if(a===0){
		return(
           <div>
           <Data one={this.one}
           two={this.two}
           three={this.three}
           four={this.four}
           five={this.five}
           six={this.six}
           seven={this.seven}
           eight={this.eight}
            />
           </div>
			);
    }
    else if(a===1){
        return(
             <div>
                <a>Click here for home page ---)  </a>
            <button onClick={this.zero}>Home</button>
            <hr></hr>
             <Componentclass/>
             </div>
        )
      }
      else if(a===2){
        return(
             <div>
                <a>Click here for home page ---)  </a>
            <button onClick={this.zero}>Home</button>
            <hr></hr>
             <ComFunction/>
             </div>
        )
      }
      else if(a===3){
        return(
             <div>
                <a>Click here for home page ---)  </a>
            <button onClick={this.zero}>Home</button>
            <hr></hr>
             <Comjst/>
             </div>
        )
      }
      else if(a===4){
        return(
             <div>
                <a>Click here for home page ---)  </a>
            <button onClick={this.zero}>Home</button>
            <hr></hr>
             <Comprops brand="ford"/>
             </div>
        )
      }
      else if(a===5){
        return(
             <div>
                <a>Click here for home page ---)  </a>
            <button onClick={this.zero}>Home</button>
            <hr></hr>
             <Comstate/>
             </div>
        )
      }
      else if(a===6){
        return(
             <div>
                <a>Click here for home page ---)  </a>
            <button onClick={this.zero}>Home</button>
            <hr></hr>
             <Comhtml/>
             </div>
        )
      }
      else if(a===7){
        return(
             <div>
                <a>Click here for home page ---)  </a>
            <button onClick={this.zero}>Home</button>
            <hr></hr>
             <Comus />
             </div>
        )
      }

      else if(a===8){
        return(
             <div>
                <a>Click here for home page ---)  </a>
            <button onClick={this.zero}>Home</button>
            <hr></hr>
             <App />
             </div>
        )
      }
  }
  
}
