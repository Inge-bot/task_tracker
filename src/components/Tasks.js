import { useState } from "react"
// const tasks = [
//     {
//         id: 1,
//         text: 'Dentist appointment',
//         day: 'Feb 3 at 10:45',
//         reminder: true,
//     },
//     {
//         id: 2,
//         text: 'Meeting at School',
//         day: 'Feb 6th at 12:00',
//         reminder: true,
//     },
//     {
//         id: 3,
//         text: 'Grocery shopping',
//         day: 'Feb 14th at 13:00',
//         reminder: false,
//     }
// ]
const Tasks = () => {
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
    return (
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
