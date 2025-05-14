import React from 'react'

const UserList = () => {
        const users = [
            {id : 1, name : "Alice", age : 35},
            {id : 2, name : "Tony", age : 45},
            {id : 3, name : "Lana", age : 22},
        ]
  return (
    users.map((ul)=>(
        <div key={ul.id}>
             id : {ul.id} age : {ul.age} 
        </div>
    ))
  )
}

export default UserList;