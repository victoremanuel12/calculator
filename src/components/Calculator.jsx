import React, { useState } from 'react'
import './calculator.css'


export default function Calculator() {
    const[num,setNum]= useState(0)
    const[oldNum,setOldNum]= useState(0)
    const[operation,setOperation]= useState()





    function inputNum(e){
        const inputValue =e.target.value
        if(num===0){
            setNum(inputValue)
        }else{
            setNum(num + inputValue)
        }
    }
    function porcentage(){
        setNum(num / 100)
    }
    function changeSing(){
        if(num > 0){
            setNum(-num)
        }else{
            setNum(Math.abs(num))// the function ABS returns always a positive number 
        }
    }
    function operatorHandler(e){
        let operatorInput = e.target.value
        setOperation(operatorInput)
        setOldNum(num)
        setNum(0)

    }

    function calculate(){
        //using parseFloat to avoid the concatenation of states
        if(operation === "/"){
            setNum(parseFloat(oldNum) / parseFloat(num)  )

        }
        if(operation === "-"){
            setNum(parseFloat(oldNum) - parseFloat(num)  )

        }
        if(operation === "+"){
            setNum(parseFloat(oldNum) + parseFloat(num)  )
        }
        if(operation === "X"){
            setNum(parseFloat(oldNum) * parseFloat(num)  )
            
        }
        // teste
        
    }
    function clear(){
        setNum(0)
    }
  return (
      <div className='wrapper'>

            <h2 className="result" >{num}</h2>
            <button className=' gridTriple' onClick={clear} >AC</button>
            <button className='orange' onClick={operatorHandler} value={'/'}>/</button>
            <button onClick={inputNum} value={7}>7</button>
            <button onClick={inputNum} value={8}>8</button>
            <button onClick={inputNum} value={9}>9</button> 
            <button className='orange' onClick={operatorHandler} value={'X'}>X</button>
            <button onClick={inputNum} value={4}>4</button>
            <button onClick={inputNum} value={5}>5</button>
            <button onClick={inputNum} value={6}>6</button>
            <button className='orange' onClick={operatorHandler} value={'-'}>-</button>
            <button onClick={inputNum} value={1}>1</button>
            <button onClick={inputNum} value={2}>2</button>
            <button onClick={inputNum} value={3}>3</button>
            <button className='orange' onClick={operatorHandler} value={'+'}>+</button>
            <button  className=" gridDouble" onClick={inputNum} value={0}>0</button>
            <button onClick={inputNum} value={"."}>.</button>
            <button className='orange' onClick={calculate}>=</button>
            <button className='orange changeSing  ' onClick={changeSing}>+/-</button>
            <button className='orange porcentage' onClick={porcentage}>%</button>
            
            
            

    </div>

  )
}
