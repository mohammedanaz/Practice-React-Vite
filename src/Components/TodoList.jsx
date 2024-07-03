import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";

export default function TodoList() {
    const [events, setEvents] = useState([])
    const [inputText, setInputText] = useState('')

    function handleOnChange(e){
        setInputText(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        if(inputText != ''){
            setEvents((prevEvent)=> [...prevEvent, inputText])
        setInputText('')
        }
        else{
            window.alert('Enter events before add.')    
        }
    }

    function handleRemove(index){
        const newEvents = [...events]
        newEvents.splice(index, 1)
        setEvents(newEvents)
    }

  return (
    <div className='container d-flex justify-content-center mt-5'>
        <div className='container w-25 mx-1'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter events' 
                    value={inputText} onChange={handleOnChange}/>
                <button type='submit'>
                    Add
                </button>
            </form>
        </div>
        <div>
            <h2>Todo List</h2>
            <ul className=''>
                {
                    events.map((event, index) => (
                        <div className='d-flex'>
                            <li key={index} className='mb-1'>{event}</li>
                            <button className='btn' onClick={()=> handleRemove(index)}>
                                <MdDelete className='fs-3'/>
                            </button>
                        </div>
                    ))
                }
            </ul>
        </div>     
    </div>
  )
}
