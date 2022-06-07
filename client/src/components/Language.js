import React from 'react'

function Language({setLanguage}) {

  const onSelectLanguage = (e) => {
    console.log(e.target.value)
    setLanguage(e.target.value)
  }

  return (
    <div className='card language absolute flex flex-row w-96 h-24 bg-fuchsia-500 rounded-3xl ring-2 ring-white'>
        <label className='w-1/2 h-8 self-center text-white font-bold text-xl'>Select a Language</label>
        <select className='w-1/2 h-8 self-center text-black italic mr-2 text-center text-lg' onChange={(e) => onSelectLanguage(e)}>
          <option value = 'cpp'>C++</option>
          <option value= 'py'>Python</option>
        </select>
    </div>
  )
}

export default Language