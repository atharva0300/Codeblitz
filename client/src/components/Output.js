import React from 'react'

function Output({output, outputPlaceholder}) {
  return (
    <div className='output self-center flex flex-col justify-center bg-orange-400'>
      <textarea disabled className='-mt-12 self-center rounded-lg placeholder:text-xl placeholder:italic-slate-400 text-xl opacity-1 text-white font-mono italic text-gray-600 placeholder:pt-2' rows = '20' cols = '65' placeholder={outputPlaceholder}  value = {output} />
    </div>
  )
}

export default Output