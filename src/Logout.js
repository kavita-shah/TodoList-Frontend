import React from 'react'

const LogoutElem = ({Logout}) => {
  return (
  <div className="LogoutComponent">
    <div className='Logout'>
        <h1>Logout</h1>
       <button onClick={Logout}>Logout</button>
       
       
    </div>
    </div>
  )
}

export default LogoutElem
