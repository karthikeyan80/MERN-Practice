import React from 'react'

const UserStatus = ({loggedIn , isAdmin}) => {
  if (loggedIn == true && isAdmin==true){
    return <h3>"Welcome Admin"</h3>
  } else{
    return <h3>"Welcome User"</h3>
  }
}

export default UserStatus;