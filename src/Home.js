import React, { useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [val, setVal] = useState('')
  const [values, setValues] = useState([])

  function AddToDo(e) {
    e.preventDefault()
    setValues([...values, val])
    console.log(values)
    axios.post('http://localhost:8000/addtodo',{val})
  }

  function DeleteToDo(i) {  
    let newValues = values.filter((x, index) => {
      return index != i
    })
    setValues(newValues)
  }
  return (
    <div>

      <div className="home">
        <h1>My ToDo List</h1>
        <div className="form">
          <form action=""  onSubmit={AddToDo}>
          <input onChange={(e) => setVal(e.target.value)} type="text" placeholder='Add Notes' />
          <input className='btnsubmit' type="submit" value="Add Todo" />
          </form>
        </div>
        <div className="result">
         
        </div>
      </div>

    </div>
  )
}

export default Home


