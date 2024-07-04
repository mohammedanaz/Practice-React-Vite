// to make a custom hook for couter function
import { useState } from "react";

export default function useCounter(initialValue = 0){
    const [count, setCount] = useState(initialValue)

    function increment(){
        setCount(count+1)
    }

    function decrement(){
        setCount(count-1)
    }

    return {count, increment, decrement}
}