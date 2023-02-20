import React from 'react'
import Card from './card'
import data from "./Data";
import './card.css'
function project() {
  return (
    <>
    <div className='head' >
       <h2 >  Projects </h2>
       <hr className='hr'/>
    </div>
   
    <div className='cards'>
      {
        data.map(item=>
          
        <Card
        key={item.id}
        image={item.image}
        title={item.title}
        desc={item.desc}
        demo={item.demo}
        repo={item.repo}
        />
      )}
    </div>
 
    </>
  )
}

export default project