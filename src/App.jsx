import { useState } from 'react'
import {useEffect} from 'react'
import {getAllToDo,addToDo,updateToDo,deleteToDo} from './utils/HandleApi'

import './App.css'
import ToDo from '../components/ToDo'

function App() {
  const [count, setCount] = useState(0)
  const [toDo,setToDo]=useState([])
  const [text,setText]=useState("")
  const [isUpdating,setIsUpdating]=useState(false)
  const [toDoId,setToDoId]=useState("")

  useEffect(()=>{
    getAllToDo(setToDo)
  },[])

  const updateMode=(id,text)=>{
    setIsUpdating(true)
    setText(text)
    setToDoId(id)
  } 

  const deleteMoDe=(id)=>{
    deleteToDo(id,setToDo)
  }

  return (
    
         <div className="container">
          <h1>Todo Application</h1>
          <div className="top">
            <input type="text"
             placeholder="Add a new task" 
            value={text}
             onChange={(e)=>setText(e.target.value)}/>

            <div className="add" 
            onClick={isUpdating ?
            ()=>updateToDo(toDoId,text,setText,setToDo,setIsUpdating):
            ()=>addToDo(text,setText,setToDo)}>
              {isUpdating ? "Update" : "Add"}
            </div>
          </div>
          <div className="list">

            {toDo.map(item=>
             <ToDo text={item.type} 
             key={item._id}
            updateMode={()=>updateMode(item._id,item.type)}
            deleteToDo={()=>{deleteMoDe(item._id)}}
            />)}
              

            </div>
      </div> 
    
  )
}

export default App
