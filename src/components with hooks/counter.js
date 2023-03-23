import React,{useState,useEffect} from  'react'

 const Incrementer=()=>{

    const [Count, setCount] = useState(0)
     // effect are seen after the changes in state and are equivalent to
     //  component did Mount,component did update and component will unmount lifecycle
    useEffect(()=>{
         document.title= `You clicked ${Count} times`;
    })

    const increment=()=>{
         setCount(Count+1)
    }

    return(
        <div>
             
               <button onClick={increment}>clicked {Count} times</button>
          </div>
    )
}
export default Incrementer