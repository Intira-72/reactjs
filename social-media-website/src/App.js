import './App.css';
import { useState } from 'react';
import Task from './Task'

function App() {
  const [ todoList, setTodoList] = useState([])
  const [ newTask, setNewTask] = useState("")

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      name: newTask,
      status: false
    }

    setTodoList([...todoList, task])
    console.log(todoList);
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id))
  }

  const complateTask = (id) => {
    setTodoList(todoList.map((task) =>{
      if (task.id === id) {
        return {...task, status: true}
      }

      return task
    }))
  }

  return (
    <div className="App">      
      <div className="addTask">
        <input className="inputTask" onChange={ handleChange } type="text" />
        <button className='addButton' onClick={ addTask }>Add Task</button>
      </div>
      <div className="list">
        <ul>
          {todoList.map((task) => {
            return <Task task={task} deleteTask={deleteTask} complateTask={complateTask} />
          })}
        </ul>             
      </div>     
    </div>
  );
};

export default App;
