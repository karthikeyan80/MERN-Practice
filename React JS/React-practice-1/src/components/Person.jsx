import React from 'react'
import Product from './Product';

const Person = (props) => {
  return (
    <div>
    <h1>name : {props.name}</h1>
    <h2>Age : {props.age}</h2>
    </div>
  )
}


export default Person; 