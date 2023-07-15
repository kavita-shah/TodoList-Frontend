
import React, { useState } from 'react'
import axios from 'axios'
const Register = ({navigate}) => {
    const [user, setUser] = useState({
        name: '',
        age: '',
        email: '',
        pass: '',
    })

    function UserVal(e) {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    async function RegisterUser(e) {
        e.preventDefault()

        if(user.name == ''){
            alert('name can not be empty!')
        }

        if(user.age == '' && user.name){
            alert('age can not be empty!')
        }
        if(user.email == '' && user.name && user.age){
            alert('email can not be empty!')
        }
        

         if(user.pass == ''&& user.name && user.age && user.email){
            alert('password can not be empty!')
        }
        if(user.name && user.age && user.email && user.pass){
            await axios.post('http://localhost:8000/register', user).then((x) => {
                alert(x.data)
                
                    navigate('/login')
                })
        }
       
            
       
    }

    return (
        
        
        <div className='registerComponent'>
            
            <div className='register'>
                
                <form action="" onSubmit={RegisterUser}>
                    <input name='name' onChange={UserVal} type="text" placeholder='Name' /><br /><br />
                    <input name='age' onChange={UserVal} type="text" placeholder='age' /><br /><br />
                    <input name='email' onChange={UserVal} type="text" placeholder='email' /><br /><br />
                    <input name='pass' onChange={UserVal} type="text" placeholder='password' /><br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
        
    )
}

export default Register


