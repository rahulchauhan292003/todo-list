import React from 'react'
import { useState, useEffect } from 'react'


const Todo = () => {
  const [count, setCount] = useState("0")
  const [count1, setCount1] = useState("0")

  
  useEffect(()=>{
    console.log("component mounted inside useeffect");

    return function(){
      console.log("component unmounted inside useeffect")
    }
  },[])

  useEffect(()=>{
    console.log("count state change");

    return function(){
      console.log("count state change unmounted",count)
      console.log("count state change unmounted")
    }
  },[count,count1])

  

    const handleInc =() =>{
        setCount(count+1)

}
const handleDesc =() =>{
    if(count<=0)return
    setCount(count-1)
}

const handleInc1 =() =>{
  setCount1(count1+1)

}
const handleDesc1 =() =>{
if(count1<=0)return
setCount1(count1-1)
}
  return (
    
    <div className=''>
      <h1>count : {count} </h1>
      <h1>count1 : {count1} </h1>
      <div >
        <button onClick={handleInc}>Increase</button>
        <button onClick={handleDesc}>Decrease</button>
      </div>
      <div >
        <button onClick={handleInc1}>Increase</button>
        <button onClick={handleDesc1}>Decrease</button>
      </div>
    </div>
  )
}

export default Todo
