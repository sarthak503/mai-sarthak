import React from 'react'
import { Button } from 'react-bootstrap'
import './index.css'
import Sk from  '../../images/sk.jpeg'
export default function about() {
  return (
    <>
    <div  className='intro'>
    <section>
    <img src={Sk} alt="sk"  className='image'/>
    </section>
    <aside>
      <h4 className=" text1 ">
        Hi, I am Sarthak Kumar currently pursuing Bachelor of Technology in Computer Science and Engineering at Indian Institute of Information Technology, Tiruchirappalli.
     </h4>
  
    <div className='bottn'>  
      <button className="resume" > <a href="https://drive.google.com/file/d/1_xv73zEDv_a_muKMJA3kLlm91FCit2wt/view"  target="_blank"  >Check Resume</a></button>
    </div>
    </aside>
    </div>
    </>
  )
}
