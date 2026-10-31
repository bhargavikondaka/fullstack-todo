import axios from 'axios'

const baseUrl = 'https://fullstack-todo-app-backend-2-4pte.onrender.com'

const getAllToDo=(setToDo)=>{
    axios
    .get(baseUrl)
    .then(({data})=>{
        console.log("data ----->",data)
        setToDo(data)
    })
    .catch((err)=>{
        console.log("err ----->",err)
    } )
}

const addToDo=(text,setText,setToDo)=>{
    axios
    .post(`${baseUrl}/save`,{type:text})
    .then(({data})=>{
        console.log("data ----->",data)
        setText("")
        getAllToDo(setToDo)

    }   )
     .catch((err)=>{
        console.log("err ----->",err)
    } )
}

const updateToDo=(toDoId,text,setText,setToDo,setIsUpdating)=>{
    axios
    .put(`${baseUrl}/update`,{_id:toDoId,type:text})
    .then(({data})=>{
        console.log("data ----->",data)
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)

    }   )
    .catch((err)=>{
        console.log("err ----->",err)
    }       )
}


const deleteToDo=(_id,setToDo)=>{
    axios
    .delete(`${baseUrl}/delete`,{
        data:{_id:_id}
    })
    .then(({data})=>{
        console.log("data ----->",data)
        
        getAllToDo(setToDo)

    }   )
    .catch((err)=>{
        console.log("err ----->",err)
    }       )
}

export   {getAllToDo,addToDo,updateToDo,deleteToDo}
