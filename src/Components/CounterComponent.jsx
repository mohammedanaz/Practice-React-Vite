import React from 'react'
import useCounter from './useCounter'

export default function CounterComponent() {
    const {count, increment, decrement} = useCounter(0)
  return (
    <div>
        <h2>Count is : {count}</h2>
        <button onClick={increment}>Incriment</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}
