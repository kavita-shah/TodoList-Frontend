import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'




const Login = (props) => {
  let [user, setUser] = useState({
    email: '',
    pass: '',
  })
 

  function userVal(e) {
    setUser({
      ...user, [e.target.name]: e.target.value
    })
  }

  async function LoginUser(e) {
    e.preventDefault()

    if(user.email == ''){
      alert('email can not be empty!')
    }
    if(user.pass == ''&& user.email ){
      alert('password should not be empty!')
    }

    if(user.email && user.pass){

    await axios.post('http://localhost:8000/login', user).then((x) => {
      alert(x.data.message)
      if (x.data.user) {
        localStorage.setItem('user',JSON.stringify(x.data.user))
        props.setUser(x.data.user)
        props.navigate('/')
      }
    })
  }

  }


  return (
    <>

      <div className="loginComponent">
        <div className='login'>
          <h1>{props.name}</h1>

          <form action="" onSubmit={LoginUser}>
            <input name='email' onChange={userVal} type="text" placeholder="email" /><br /><br />
            <input name='pass' onChange={userVal} type="text" placeholder="password" /><br /><br />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>


    </>
  )
}

export default Login


