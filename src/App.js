import React,{useState} from "react";
import Squares from './Squares'
import {calculateWinner} from './utils'
import "./style.css";

export default function App() {
const[squares,setSquares]=useState(new Array(9).fill(null));
const [isX, setIsX]=useState(true);
const handleClick=(i)=>{
  if (calculateWinner(squares) || squares[i]) {
    return
  }

  squares[i] = isX ? 'X' : 'O'
  setSquares(squares)
  setIsX(!isX)
}

const winner = calculateWinner(squares)
let status

if (winner) {
  status = `Winner: ${winner}`;
} else {
  status = 'Next player: ' + (isX ? 'X' : 'O');
}
const handleRestart = () => {
  setIsX(true)
  setSquares(Array(9).fill(null))
}

  return (
    <div>
      <h1 className='title'>Tic-Tac-Toe</h1>
      <Squares handleClick={handleClick} squares={squares}status={status} handleRestart={handleRestart}/>
    </div>
  );
}
