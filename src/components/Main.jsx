import React from 'react'
import data from "../helpers/data"
import "../styles/style.css"
const Main = () => {
  return (
    <div className='cards'>
     {data.map((item)=>{
        return <div className='card'>
            <h1 className='title'>{item.title}</h1>
            <img  className="image" src={item.image} />
            <p className='desc'>{item.desc}</p>
         </div>
     })

     }



    </div>
  )
}

export default Main