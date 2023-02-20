import React from 'react'
import Social from './social';
import './style.css'
function footer() {
  const date=new Date().getFullYear()
  return (
    <div className='footbody'>
      <Social/>
      <div>

      <div className='hart'>
        Made with 
        <div className='heart'> &hearts; </div> 
        Sarthak
      </div>
      <br />
      Copyright &copy; {date}
      </div>
    </div>
  )
}

export default footer;