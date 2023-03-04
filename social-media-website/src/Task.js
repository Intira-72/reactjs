const Task = (props) => {    

    return (
        <li>
            <span style={{color: props.task.status && "green"}}>
                { props.task.name }
            </span>            
            {!props.task.status && <button onClick={() => props.complateTask(props.task.id)}>Complate</button>}
            <button onClick={() => props.deleteTask(props.task.id)}> X </button>
        </li>
    )
}

export default Task;