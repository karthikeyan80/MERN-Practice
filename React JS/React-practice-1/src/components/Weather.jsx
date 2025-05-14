import React from 'react'

const Weather = ({temp}) => {

   if (temp < 15){
    return <h1>Its cold outisde !</h1>
   }
   else if(temp >=15 && temp<=25){
    return <h2>Its rains outside</h2>
   }
   else if(temp > 25){
    return <h2>Its hot outisde</h2>
   }
}

export default Weather;

