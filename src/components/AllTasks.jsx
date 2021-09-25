import React from 'react'
import Tasks from './Tasks'

const AllTasks = (props) => {

  const deleteTask = (deleteTaskId) => {
    const newInputDatabase = [];
    props.inputDatabase.forEach(i => {
      if(i.id !== deleteTaskId){
        newInputDatabase.push(i);
      }
    });
    props.setInputDatabase([...newInputDatabase]);
  }

  const checkTaskInput = (clickedId) => {
      props.inputDatabase.forEach(i => {
        if(i.id === clickedId){
          i.checked = (i.checked === 0?1:0);
        }
      })
      props.setInputDatabase([...props.inputDatabase]);
    }

    const showTask = (i) => {
        return (
          <Tasks key = {Math.floor(Math.random() * 10000000000) + 1} task = {i.task} checked = {i.checked} checkTask = {checkTaskInput} deleteTask = {deleteTask} id = {i.id}/>
        )
    }


    return (
        <div className="all-tasks">
            {props.inputDatabase.map(showTask)}
        </div>
    )
}

export default AllTasks
