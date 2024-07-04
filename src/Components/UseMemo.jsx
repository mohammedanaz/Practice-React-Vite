import React, {useMemo, useState} from 'react'

export default function UseMemo() {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)
    const [c, setC] = useState(5)
    const memoizedResult = useMemo(()=>{
        console.log('inside complex function');
        return a+b
    }, [a, b])
  return (
    <div>
        <h2>Sum is: {memoizedResult}</h2>
        <h2>C is: {c}</h2>
        <button onClick={()=> setA(a+1)}>plus A</button>
        <button onClick={()=> setC(c+1)}>plus C</button>
    </div>
  )
}
