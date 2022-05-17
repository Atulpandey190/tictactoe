import React from 'react'

function Square({cellNumber,onClick,isWinningSquare}) {
  return (
    <button className='square'
     onClick={onClick} 
     style={{ fontWeight: isWinningSquare?"bold":'normal',
      color:isWinningSquare?"black":'white',
    }}
     >
        {cellNumber}
       
    </button>
  )
}

export default Square