import React from 'react'
import './Academic.css'
const Academic = (props) => {
  return (
    <div>
      <span className="acad">
        <h1>{props.head}</h1>
        <p>{props.description}</p>


      </span>
    </div>
  )
}

export default Academic
