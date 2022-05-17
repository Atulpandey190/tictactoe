import React from 'react'

function StatusMessage({current,winner}) {
    const noMovesLeft=current.board.every(el=>el!==null);
  return (
    <h2 className='message'>
        {
           winner&&`winner is ${winner}`
        }
        {
            !winner&&!noMovesLeft&&`Next Player is ${current.isx?'X':'0'}`
        }
        {
            !winner&&noMovesLeft&& 'Match Tied'
        }
    </h2>
  )
}

export default StatusMessage