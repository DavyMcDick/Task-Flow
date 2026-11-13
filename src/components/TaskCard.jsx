function TaskCard({title, description, priority, status, dueDate}) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{priority}</p>
            <p>{status}</p>
            <p>{dueDate}</p>
        </div>
    )
}

export default TaskCard;