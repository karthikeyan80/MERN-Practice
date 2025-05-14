import React from 'react'

const ProductList = () => {
    const products =[
        {id : 1 , name : "Phone" , price : "$699"},
        {id : 2 , name : "Lap" , price : "$1799"},
        {id : 3 , name : "Tab" , price : "$599"},
    ]
  return (
   
    products.map(({id , name , price})=>(
    <div key={id}>
        <br />
        id : {id} ,  <br/> <br/>
        name : {name} ,<br /><br />
        prices : {price} <br /><br />
    </div>
    )
  
  )
)
}

export default ProductList;