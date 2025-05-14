import React, { useRef } from 'react'

const FocusInput = () => {

    const inputelement = useRef(0);
    const handleInput = ()=>{
         inputelement.current.focus()
    } 

  return (
    <div>
        <input ref={inputelement} type='number'></input>
        <button onClick={handleInput} value={inputelement}>click</button>
        </div>
  )
}

export default FocusInput;