import React,{Component} from 'react'
import axios from 'axios'
import {Loading} from './loading'
class Azaxcall extends Component{

    constructor(props){
        super(props)
        //state
        this.state={
            users:[],
            loading:false,
            count:0
        }
        //binding function used in page
        this.handleChange=this.handleChange.bind(this)
    }
    getData(){
        
        this.setState({
            loading:true
        })
        axios("https://api.randomuser.me/?nat=US&results=5")
        .then(response=>this.setState({
            // multiple data binding in array with spread operator
            users: [...this.state.users, ...response.data.results] ,
            loading:false,
            count:this.state.count + 5
        }))
    }
//runs first
    UNSAFE_componentWillMount(){
  
        this.getData()
 
 }

    handleChange(e){
        e.preventDefault();
        this.getData()
    }
    render(){
        // destructuring
        const {loading ,users,count}=this.state  

        return(
            <div >
               <div>                  
                   <button className='button' onClick={this.handleChange}>click,loaded {count} more user</button>
                 
               </div>
               <div >
                  {/* conditional rendering   */}
               {!loading?users.map(users=>(
                //  key is used to identify each received array data
                    <div key={users.id.value}>
                      
                        <h2 style={{color:'red'}}>{users.name.first}</h2>
                        <p>{users.email}</p>
                        <hr/>
                    
                    </div>
                ))  :(<Loading message="loading wait...."/>)}
                 
               </div>
               
            </div>
        )
    }
}
export default Azaxcall