import React from 'react'


const Note = (props) => {
    return (
        
        <div className="note">
        <div className="note-title">
          {  props.note.title }
        </div>
        <div className="note-body">
            <p>
                {props.note.body}
            </p>
        </div>
        </div>
    
    )
}

export default Note