import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"

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

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  return (
    <div className='container'>
      <Header />
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No tasks to do'}
    </div>
  );
}

export default App;
