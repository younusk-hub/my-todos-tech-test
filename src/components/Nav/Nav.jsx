import React from 'react'
import "./Nav.scss"

const Nav = ({handleReset}) => {
  return (
    <div className='nav-container'>
        <h1 className='nav-container__title'>My Todos</h1>
        <button onClick={handleReset} className='nav-container__reset-button'>Reset</button>
    </div>
  )
}

export default Nav