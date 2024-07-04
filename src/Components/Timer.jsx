import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        const timer = setInterval(()=>(
            setCount((prevCount => prevCount+1))
        ) ,1000)

        return ()=>{
            clearInterval(timer)
        }
    } ,[count])
  return (
    <div>
      <h2>Timer is - {count}</h2>
    </div>
  )
}
