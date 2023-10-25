import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const ToDo = ({task}) => {

  return (
    console.log("SONO QUI"),
    <div className='Todo'>
      <p>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} className='trash' />
        <FontAwesomeIcon icon={faTrash} className='edit' />
      </div>  
    </div>
    
  )

}

export default ToDo