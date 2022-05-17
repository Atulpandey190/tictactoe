import React from 'react'

function History({history,moveTo,currentMove}) {
  return (
    <div>
        <ul className='history'>
            {
                history.map((_,move)=>{
                    return(
                        <li key={move} >
                            <button className="item" style={
                                {
                                    fontWeight: move===currentMove ? 'bold':'normal'
                                }
                            } onClick={onclick=>moveTo(move)}>
                                {move===0?"Go to start":`Go to move #${move}`}
                            </button>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default History