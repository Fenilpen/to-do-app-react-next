"use client"
import React, { useState } from "react";

export const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  
  const redu = (x) => {
    x.preventDefault()

    setMainTask([...mainTask, {title, desc}])
    // console.log(title)
    // console.log(desc)
    settitle("")
    setdesc("")  
    console.log(mainTask)
  };

  const deleteHandeler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  let rendertask = <h2>no task available</h2>; 

  if(mainTask.length>0){
rendertask =  mainTask.map((t,i)=>{
     return ( 
      <li key={i} className="flex items-center justify-between mb-5">
     <div className="flex items-center justify-between w-2/3">
      <h5 className="text-xl font-semibold">{t.title}</h5>
      <h5 className="text-xl font-semibold">{t.desc}</h5>
     </div>
     <button
     onClick={ () => { deleteHandeler(i) }}
     className="bg-red-400 text-white p-3 border-2 " >delete</button>
     </li>
     );
  })
}
  return (
    <>
    <h1 className='bg-black text-white text-5xl font-bold text-center p-5' >my to do list</h1>
    <form onSubmit={redu}>

      <input type="text" className='border-zinc-800 border-4 m-5 
      px-4 py-2' 
      placeholder='put your task here' 
      value={title}
      onChange={(a)=>{
        settitle(a.target.value)
      }}
      />

      <input type="text" className='border-zinc-800 border-4 m-5 
      px-4 py-2' 
      placeholder='put your task here' 
      value={desc}
      onChange={(m)=>{
        setdesc(m.target.value)
      }}
      />

      <button className='border-4 border-black-600 p-2 bg-black text-white font-bold rounded text-2xl m-5' onClick={redu}> Add Task</button>

    </form>

    <hr />
    <div className="p-8 bg-slate-200">
      <ul>{rendertask}</ul>
    </div>
    </>
  )
}

export default page