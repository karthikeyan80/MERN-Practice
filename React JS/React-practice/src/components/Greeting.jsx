import React from 'react'

const Greeting = ({timeOfDay}) => {
   return (
     timeOfDay == "morning" 
   ? <h2>Morning</h2>
    : <h2>Afternoon</h2>
   )
    
}

export default Greeting;