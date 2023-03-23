import React,{useState,useEffect} from 'react'
import axios from 'axios'


 const AzaxcallwithHook =()=>{

    const [users, setUsers] = useState([])
    const [loading, setloading] = useState(false)
    const [count, setCount] = useState(0)
    // initially count is set to 1 as with useEffect initiallly data is  already fetched so to keep count equal
         
    const getData=()=>{
        setloading(true)
        axios("https://api.randomuser.me")
        .then(response=>(setUsers([...users,...response.data.results]),setloading(false))
        )
    }
    useEffect(() =>
       {getData()},[count]
    )
    
    const handleChange=(e)=>{
        e.preventDefault();
        setCount(count+1);   
    
    }

     return(
            <div >
              <h1>AZAX API CALL from random user api</h1>
               <div>                  
                   <button className='button' onClick={handleChange}>find more user</button>   
                   <span>{count} </span>
               </div>
               {loading?<h2>loading...</h2>:''}
              {users.map(users=>(
                   <div key={users.id.value}>   
                   <h2 style={{color:'red'}}>{users.name.first}</h2>
                   <p>{users.email}</p>
                   <hr/>
               
                  </div>
              )
              )
            }
               
            </div>
        )
    
}
export default AzaxcallwithHook