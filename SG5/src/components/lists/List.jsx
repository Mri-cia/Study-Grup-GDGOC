import './List.css'

function TaskList({lists, onEdit, onDelete}){
    return(
        <div className="list-parent" style={{width: '500px'}}>
            {lists.map((list) => {
                return(
                    <List id={list.id} key={list.id} name={list.name} editTask={onEdit} deleteTask={onDelete}></List>
                )
            })}
        </div>
    )
}

function List({id, name, editTask, deleteTask}){
    return(
        <div className='list-child'>
            <p className='task-line'>{name}</p>
            <div className="">
                <button type="button" className='button-edit' onClick={() => {editTask(id)}}>Edit</button>
                <button type="button" className='button-delete' onClick={() => {deleteTask(id)}}>Delete</button>
            </div>
        </div>
    )
}

export default TaskList