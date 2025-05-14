import React, { useEffect } from 'react'

const BasicEffect = () => {

    useEffect(()=>{
        console.log("the use effect has executed");
    },[])
  return (
    <div>BasicEffect</div>
  )
}

export default BasicEffect   