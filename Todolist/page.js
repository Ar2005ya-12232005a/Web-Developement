"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc,setDesc] = useState("")

  const [mainTask,setMainTask] = useState([]);



  const submitHandler = (e)=>{
    e.preventDefault()
    setMainTask([...mainTask,{title,desc}]);
    setTitle("")
    setDesc("")
    console.log(mainTask);

  }

  const deleteHandler = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)


  }

  const completeHandler = (i)=>{
    let copytasks = [...mainTask]
    copytasks.splice(i,1)
    setMainTask(copytasks)

  }



  let renderTask = <h2 className = 'text-white'>No Task Available</h2>

  if(mainTask.length >0){
    renderTask = mainTask.map((t,i)=>{
    return <li key={i} className = 'flex items-center justify-around'><div className = 'flex m-6 justify-around w-2/3 bg-amber-200 py-2 rounded text-black '>
      <h5 className = 'text-lg'>{t.title}</h5>
      <h6 className = 'text-lg'>{t.desc}</h6>
    </div>

    <button onClick = {()=>{
      deleteHandler(i);

    }}className = 'bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>

    <button onClick = {()=>{
      completeHandler(i);
    }} className = 'bg-green-600 text-white px-4 py-2 rounded font-bold'>Complete</button>
    </li>

  })
  }
  
  

  return (
   <>

   <h1 className ='bg-zinc-800 text-white p-5 text-2xl font-medium text-center' >My Todo-List</h1>
   <form onSubmit = {submitHandler} className = 'flex bg-amber-950 justify-center items-center h-40 w-10xl m-10 p-20 rounded'>

    <input suppressHydrationWarning type = "text" className = 'text-lg bg-amber-200 rounded  m-5 px-4 py-2' placeholder="Enter Title Here" value ={title} onChange = {(e)=>{
     
     setTitle(e.target.value)
    }}/>
    
   

   
    <input suppressHydrationWarning type = "text" className = 'text-lg bg-amber-200 rounded m-5 px-4 py-2 border-none' placeholder="Enter Description Here" value = {desc} onChange = {(e)=>{

      

      setDesc(e.target.value);

    }}/>
    

    <button className ='bg- bg-zinc-900 text-white px-4 py-3 text-xl cursor-pointer font-medium rounded m-5'>Add Task</button>

   </form>
   {/* <hr/> */}
   <div className = 'p-5 bg-amber-950 mx-25 rounded'>
    <ul>
      {renderTask}
    </ul>
   </div>
   
   
   </>
  )
}

export default page