import React from 'react'

function Editor({code , onSubmit , setCode , placeholder}) {

  const handleSubmit = (e) => {
    const output = onSubmit(code)
  }


  return (
    <div className='editor flex flex-col justify-center self-center bg-cyan-400'>
      <textarea className = "placeholder:pt-2 self-center rounded-lg placeholder:text-xl placeholder:italic-slate-400 text-xl font-mono italic text-gray-600" rows = '20' cols = '65' value = {code} onChange = {(e) =>{setCode(e.target.value)} } placeholder = {placeholder} />
      <button className = "mt-4 self-center text-3xl w-44 h-18 bg-gradient-to-r from-fuchsia-600 to-blue-600 rounded-xl text-white py-2 px-8 hover:bg-gradient-to-l hover:ring-2 hover:ring-white hover:gray-300" type = "submit" onClick={(e) => handleSubmit(e)}>Submit</button>
      </div>
  )
}

export default Editor