import React from 'react'
import TodoItem from "./TodoItem"



const Doing = ({todo, delBtn, moveTask}) => {
    return (
        <div style={doingStyling}>
             <h4 style={{ fontSize : '1.2rem', marginLeft : '5%' }}>Doing</h4>
       { todo.map((todo) => {
           if(todo.status==='doing'){
         return<TodoItem key={todo.id} todo={todo} delBtn={delBtn} moveTask={moveTask}/>}

       })
       }
        </div>
    )
}

let doingStyling = {
    backgroundColor : 'rgba(250, 250, 250)',
    minHeight : '60vh',
    width : '25vw',
    paddingBottom : '10px',
    borderRadius : '15px',
   boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'

}


export default Doing
