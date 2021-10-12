import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"
import AddTask from './components/AddTask'
// import Task from './components/Task'

// can also use context api or redux for global state
function App({ color, text }) {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Dentist appointment',
      date: 'Feb 3 at 10:45',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      date: 'Feb 6th at 12:00',
      reminder: true,
    },
    {
      id: 3,
      text: 'Grocery shopping',
      date: 'Feb 14th at 13:00',
      reminder: false,
    }
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
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
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to do'}
    </div>
  );
}

export default App;
