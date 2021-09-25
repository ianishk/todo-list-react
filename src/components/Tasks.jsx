import React from 'react'
const Tasks = (props) => {
    return (
        <div style={{display:"flex", alignItems:"center"}}>
            <p onDoubleClick={() => {props.checkTask(props.id)}} className={props.checked === 1 ?"task__field task__checked-field":"task__field task__unchecked-field"}>{props.task}</p>
            <button onClick={() => {props.deleteTask(props.id)}} style={{height:"36px",borderTopLeftRadius:"0px",borderBottomLeftRadius:"0px"}} className="btn btn-outline-danger">del</button>
        </div>
    )
}

export default Tasks
