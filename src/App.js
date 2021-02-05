import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Todo from './components/Todo'
import Doing from './components/Doing'
import Done from './components/Done'
import AddTodo from './components/AddTodo'
import { v4 as uuidv4 } from 'uuid';

function App() {

  //global state

  const [todos, setTodos] = useState([
 
])

//add task to todo
const addTask = (task) => {

  const newTask = { title : task,
    status : 'todo',
  id : uuidv4()
  }

  setTodos([...todos, newTask])

}

//delete task with delete button

const deleteTask = (id) => {
setTodos(todos.filter( (todo) => todo.id !== id ))
}

//move task to doing and done

const moveTask = (id, status, title) => {
 const temp = todos.filter((todo) => todo.id!==id);
  if(status==='todo'){
 setTodos([...temp, {title : title, status: 'doing', id : uuidv4()}])
}

else if(status==='doing'){
  setTodos([...temp, {title : title, status: 'done', id : uuidv4()}])
}
}


//render

  return (
    <div className="App">
      <Header />
      <AddTodo addTodo={addTask} />
      <p style={{ textAlign: 'center'}}>Double click to change the status of tasks</p>
      <div className="cards" style={containerStyle}>

<Todo todo={todos} delBtn={deleteTask} moveTask={moveTask} />
<Doing todo={todos} delBtn={deleteTask} moveTask={moveTask} />
<Done todo={todos} delBtn={deleteTask} moveTask={moveTask} />

      </div>
    </div>
  );
}

const containerStyle = {
  display : 'flex', 
  justifyContent : 'space-between',
  margin : '40px 60px 20px 60px',
}

export default App;
