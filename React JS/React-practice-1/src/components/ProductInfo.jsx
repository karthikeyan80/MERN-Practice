import React from 'react'

const ProductInfo = () => {
    const {name , price , avail :availability  } = {
       "name": "Laptop", "price": "$1200" ,"avail" : "In Stock",
    }

  return (
    <div>
        <ul>
            <li>Name : {name}</li>
            <li>Price : {price}</li>
            <li>Availability : {availability}</li>
        </ul>
    </div>
  )
}

export default ProductInfo;