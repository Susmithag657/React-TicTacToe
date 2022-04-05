import React,{useState} from 'react'

const Squares=({handleClick,squares,status,handleRestart})=>{
return (
  <div className='container'>
  <div className='board'>
    {Array.from(new Array(9),(e,i)=>i+1).map((e,i)=>(<div className={`div${e}`} key={i} onClick={()=>handleClick(i)}> {squares[i]}</div>))}
  </div>
  <div className='status'>{status}</div>
  <button className='reset' onClick={handleRestart}>Reset</button>
  </div>
)
}
export default Squares;