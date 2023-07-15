import React, { useEffect, useState } from 'react'
import axios from 'axios'

const List = () => {
    let [update, setUpdate] = useState(false)
    let [list, setList] = useState([])
    let [val,setVal]= useState('')
    let [id ,setId]= useState('')

    useEffect(() => {
        GetList()
    }, [])

    const GetList = async () => {
        let response = await axios.get('http://localhost:8000/getalltodo')
        setList(response.data)
    }

    const RemoveFromList = async (id) => {
        await axios.delete(`http://localhost:8000/deletetodo/${id}`).then((resp) => {

            if (resp.data.success) {
                GetList()
            }
        })
    }

    const UpdateForm = (id) => {
        setUpdate(true)
        setId(id)
    }

    const SubmitUpdate =async(e)=>{
        e.preventDefault()
    
    let resp = await axios.put(`http://localhost:8000/updatetodo/${id}`,{val})
    if(resp.data.success){
        GetList()
    }
    }
    return (
        <>
            <div className='list'>
                <h1>Todos</h1>
                <ul>
                    {
                        list.map((x) => {
                            return <li><span>{x.val}</span>  <span onClick={() => RemoveFromList(x._id)}>close</span><span onClick={() => UpdateForm(x._id)}>Update</span></li>
                        })
                    }
                </ul>

            </div>
            {
                update ? <form  onSubmit={SubmitUpdate} action="">
                    <div><input onChange={(e)=>setVal(e.target.value)} type="text" placeholder='Enter  value' /></div>
                    <div><input type="submit" value="Submit" /></div>
                </form> : ''
            }

        </>
    )
}

export default List


