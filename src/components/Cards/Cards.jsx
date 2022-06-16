import React from 'react'

const Cards = ({cardArr}) => {
   const displayCards = () => {
    cardArr.forEach(string => {
        return (
            <div className='card'>
                <input type="text" />
                <h2>{string}</h2>
                {/* <img src="" alt="" /> */}
            </div>
        )
    });
   } 
  return (
    <div>
        {displayCards}
    </div>
  )
}

export default Cards