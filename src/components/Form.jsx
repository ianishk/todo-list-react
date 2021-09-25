import React from 'react'

const Form = (props) => {

    const getInput = (e) => {
        e.preventDefault();
        if(e.target.task.value !== ""){
            e.target.task.placeholder="Enter the task"
            const taskInput = e.target.task.value;
            const newInput = {
            id: Math.floor(Math.random() * 10000000000) + 1,
            task: taskInput,
            checked: 0
            } 
            e.target.task.value = "";
            props.setInputDatabase([...props.inputDatabase, newInput])
        }
        else{
            e.target.task.placeholder = "Empty tasks cannot be added"
        }
    }

    return (
        <form onSubmit={getInput} className="form-input">
            <input type="text" className="form-control form-input-field"  name="task" id="" placeholder="Enter the task" />
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    )
}

export default Form
