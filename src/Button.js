import React from 'react'

function Button(props) {
  
  return (
    <div className="button" onClick={props.clickHandler}>
      {props.text}
    </div>
  )
}

export default Button
