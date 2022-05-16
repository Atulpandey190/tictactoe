import React from 'react'

function Square({cellNumber,onClick}) {
  return (
    <button className='square' onClick={onClick}>
        {cellNumber}
    </button>
  )
}

export default Square