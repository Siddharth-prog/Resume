import React from 'react'
import './Card.css'
const Card = (props) => {
  
  return (
    <div>
      <span className="card">
        <h1>{props.head}</h1>
        <p>{props.description}</p>


      </span>
    </div>
  )
}

export default Card

