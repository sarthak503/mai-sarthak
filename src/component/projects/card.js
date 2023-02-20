import React from 'react'
import Card from 'react-bootstrap/Card';
import img from '../../images/lap.jpeg'
import { Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './card.css'
import { useEffect } from 'react';
// const styles = {
//   cardImage: {
//     width: '200px',
//     height:'200px',
//     padding:'10px'
//   }
  
// }
function CardIt(props) {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
  return (
    <div  data-aos="fade-up" className='box colorIt'>

    <div className="flip-card">
      <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={props.image} alt="Avatar" className='cardImage' />
        <h4>{props.title}</h4>
      </div>
      <div className="flip-card-back">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <button className='buttn'><a href={props.demo} target="_blank">Demo</a></button>
        <button className='buttn'><a href={props.demo} target="_blank">Repo</a></button>
      </div>
      </div>
    </div>

    </div>
  )
}

export default CardIt;