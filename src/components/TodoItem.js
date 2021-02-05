import React from 'react'

const TodoItem = ({todo, delBtn, moveTask}) => {


    return (
        <div style={styling} onDoubleClick={() => moveTask(todo.id, todo.status, todo.title)}>
         <div style={{fontSize : '1.1rem', padding: '2px 2px 2px 5px', wordWrap: 'break-word', width : '85%'

}}>{todo.title}</div>
         <button type="button" style={deleteBtn} onClick={() => {delBtn(todo.id)}}>x</button>
        </div>
    )
}

const styling = {
    margin : '0px auto 10px auto',
    width : '90%',
    backgroundColor : '#c0e218',
    color : 'black',
    borderRadius : '7px',
    padding : '2px',
    position : 'relative',
    minHeight : '1.8rem'
    
  
}

const deleteBtn = {
fontSize :'12px',
fontWeight : '600',
borderRadius : '50%',
borderStyle : 'none',
height : '20px',
backgroundColor : '#c70039',
position : 'absolute',
top : '1vh',
right : '2vh',
color : 'white'


}

export default TodoItem
