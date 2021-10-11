import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"
import AddTask from './components/AddTask'
// import Task from './components/Task'

// can also use context api or redux for global state
function App({ color, text }) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Dentist appointment',
      day: 'Feb 3 at 10:45',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 12:00',
      reminder: true,
    },
    {
      id: 3,
      text: 'Grocery shopping',
      day: 'Feb 14th at 13:00',
      reminder: false,
    }
  ])

  // Add Task
  const addTask = (task) => {
    console.log(task)
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
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to do'}
    </div>
  );
}

export default App;
