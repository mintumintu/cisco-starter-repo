import React from 'react'

function ExhibitComponent(props) {
  return (
    <>
        <div className='card-container'>
            <div className='card-header'><h2>{props.heading}</h2></div>
            <div className='card-body'><h3>{props.body}</h3></div>
        </div>
    </>
  )
}

export default ExhibitComponent
