import React from 'react'
import { Button } from 'react-bootstrap';
import "./style.css"
function about() {
  return (
    <>
    <div className='contact'>
      <h1>Get in touch</h1>
      <p>If you have any project idea and you want to discuss, get in touch instantly, say hey!!</p>
      <Button href='mailto:sarthak.kmr503@gmail.com' variant="outline-primary">Contact me</Button>
    </div>
    </>
  )
}

export default about