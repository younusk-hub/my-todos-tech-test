import React, { useState } from 'react'
import "./AddCard.scss"

const AddCard = ({handleSubmit}) => {
    const [stringData, setStringData] = useState("")
    
    const handleInput = event => {
        event.preventDefault();
        setStringData(event.target.value)
        console.log(stringData);
    }

  return (
    <form className='form' onSubmit={handleSubmit}>
        <input placeholder='Add your task here...' id='name' className='form__input' type="text" value={stringData} onInput={handleInput}/>
        <button className='form__submit' type="submit" >Add Task</button>
    </form>
  )
}

export default AddCard