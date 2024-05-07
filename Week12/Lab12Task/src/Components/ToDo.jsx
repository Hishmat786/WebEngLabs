import React, { useState } from 'react';

const ToDo = () => {
    const [tasks, setTasks] = useState([]); 

    const addTask = (task) => { 
        setTasks([...tasks, task]);
    };  

    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };  

    return (
        <div>
            <h1>To-Do List</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const task = e.target.task.value;
                    addTask(task);
                    e.target.task.value = '';
                }}
                >
                <input type="text" name="task" />
                <button type="submit">Add Task</button>
            </form>
            <h2>Tasks</h2>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            {task}
                            <button onClick={() => deleteTask(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
        </div>
    );  
};
export default ToDo;