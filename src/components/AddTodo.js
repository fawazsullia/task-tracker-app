import React from 'react'
import { useState } from 'react'

const AddTodo = ({addTodo}) => {

const [text, setText] = useState('')

const onAdd = (e) => {
if(!text) { alert('Please add task')
return}
else {
    addTodo(text);
    setText('')
}
}

    return (
        <div style={{ textAlign : 'center' }}>
            <input type="text" style={inputStyle} placeholder="Add task" value={text} onChange={ (e) => {setText(e.target.value)}}></input> 
            <button type="button" style={addButton} onClick={onAdd}>Add</button>
        </div>
    )
}

const inputStyle = {
 marginTop : '40px',
 height : '25px', 
 width : '35vw',
 paddingLeft : '10px',  
 borderRadius : '7px' ,
 borderStyle : 'solid' ,
 borderWidth : '1px',
}

const addButton = {
    height : '35px', 
    width : '4vw',
    marginLeft : '10px',
   backgroundColor : '#c70039',
   color : 'white',
   borderStyle : 'solid',
   borderWidth : '1px',
   borderRadius : '7px'
 
}

export default AddTodo
