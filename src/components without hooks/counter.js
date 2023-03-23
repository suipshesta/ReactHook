import React,{Component} from 'react'


class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
        this.increment=this.increment.bind(this);
    }

     increment(){
        this.setState({count:this.state.count+1})
     }
     
     render(){

     return(
           <div>
             
               <button onClick={this.increment}>clicked {this.state.count} times</button>
           </div>
        )
    }
}
export default Counter