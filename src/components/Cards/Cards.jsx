import React from 'react'
import "./Cards.scss"

const Cards = ({cardArr, handleChange, handleDelete}) => {
    const displayCards = cardArr.map((string, index) => {
            const joinedString = string.split(" ").join("-")
            return (
                <form onSubmit={handleDelete}  className='card-container__card'>
                    <input type="checkbox" onChange={handleChange} key={index}/>
                    <label className='card-container__card__label' htmlFor={joinedString}>{string}</label>
                    <button type="submit">delete</button>
                </form>
            )
        });

    const displayInfo = (
        <div>
            Nothing to see here yet... Add a task in the feild above!
        </div>
    )
  return (
    <div className='card-container'>
        {cardArr.length>0 ? displayCards : displayInfo}
        
    </div>
  )
}

export default Cards