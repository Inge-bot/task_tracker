import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState, useEffect } from "react"
import AddTask from './components/AddTask'
// import Task from './components/Task'

// can also use context api or redux for global state
function App({ color, text }) {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  // UseEffect hook for json server
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
  })

  const data = await res.json()
  setTasks([...tasks, data])
  // const id = Math.floor(Math.random() * 1000) + 1
  // const newTask = { id, ...task }
  // setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE',
  })
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? {
        ...task, reminder:
          !task.reminder
      } : task
    )
  )
}

return (
  <div className='container'>
    <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
    {showAddTask && <AddTask onAdd={addTask} />}
    {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to do'}
  </div>
);
}

export default App;
