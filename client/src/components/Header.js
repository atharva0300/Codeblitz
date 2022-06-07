import React from 'react'

function Header({toggleDisplayEmail , displayEmail}) {

  const onClickEmail = (e) => {
    toggleDisplayEmail(!displayEmail)
  }


  return (
    <div>
      <nav className='w-full h-24 bg-fuchsia-500 flex flex-row justify-around'>
          <div className='w-12 h-18 self-center ml-24 flex flex-row justify-center'>
            <h1 className='-ml-36 text-white font-roboto text-4xl italic font-semibold'>CodeBlitz</h1>
            <img src = {require('../img/thunder.png')} className = "italic w-12 h-12" />
          </div>
          <h2 className='self-center text-white font-mono text-xl'>Developed by Atharva Pingale</h2>
          <div className='w-96 h-18 self-center flex flex-row justify-evenly ml-64'>
              <button onClick = {(e) => onClickEmail(e)}className='text-xl text-white w-36 h-12 bg-orange-400 rounded-2xl ring-2 ring-orange-400 hover:text-orange-400 hover:ring-2 hover:ring-orange-400 hover:bg-white hover:shadow-lg hover:shadow-gray-300'>Get an email !</button>
              <button className='text-xl text-white w-36 h-12 bg-cyan-400 rounded-2xl ring-2 ring-cyan-400 hover:text-cyan-400 hover:ring-2 hover:ring-cyan-400 hover:bg-white hover:shadow-lg hover:shadow-gray-300'>About us</button>
          </div>
      </nav>
    </div>
  )
}

export default Header