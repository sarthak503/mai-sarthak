import React from 'react'
import Skill from './skill'
import skillset from './skillset'
const Skills = (props) => {
  return (
    <>
    <div className='head' >
    <h2 > Skills </h2>
    <hr className='hr'/>
    </div>
    <div className='poa'>

    {skillset.map(item =>
          
          <Skill 
          key={item.id}
          image={item.image}
          />
    )}
    </div>
      
    </>
  )
}

export default Skills