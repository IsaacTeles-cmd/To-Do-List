import React, {useState} from 'react';

function toDoList() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tasks, setTasks] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [newTask, setNewTask] = useState("");


    function handleInputChange(event) {
        setNewTask(event.target.value);
    }


    function addTask() {

        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }


    function deleteTask(index) {
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
    }

    function toMoveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function toMoveTaskDown(index) {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
    <div className='to-do-list'>
        <h1>To-Do-List</h1>
        <div>
            <input type='text' placeholder='Enter a task. . .' value={newTask} onChange={handleInputChange}></input>
            <button className='add-button' onClick={addTask}>Add</button>
        </div>

        <ol>
            {tasks.map((task, index) => <li key={index}>
                <span className='text'>{task}</span>
                <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                <button className='move-button' onClick={() => toMoveTaskUp(index)}>Up</button>
                <button className='move-button' onClick={() => toMoveTaskDown(index)}>Down</button>
            </li>)}
        </ol>

    </div>)
}

export default toDoList