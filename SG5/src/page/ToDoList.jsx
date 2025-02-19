import React, {useState} from 'react'
import Input from '../components/input/Input.jsx'
import TaskList from '../components/lists/List.jsx'


function ToDoList() {
  const [editedId, setEditedId] = useState('');
  const[lists, setLists] = useState([
    {id: 1, name: 'List 1'},
    {id: 2, name: 'List 2'},
    {id: 3, name: 'List 3'},
  ])

  return (
    <div className="main-list">
      <h1 className="title">ToDo List</h1>
      <Input
        addTask={(taskName) => {
          setLists([...lists, {id: Date(), name: taskName}])
        }}
        editTask={(taskChange) => {
          const updatedList = [...lists]
          updatedList.forEach((list) => {
            if(list.id === editedId){
              list.name = taskChange
            }
          })
          setLists(updatedList)
          setEditedId('')
        }}
        editMode={editedId}
      />
      <TaskList 
      onEdit={(id) => {
        setEditedId(id)
      }}
      onDelete={(id) => {
        const updateList = [...lists]
        setLists(updateList.filter(list => list.id != id) )
      }} 
      lists={lists}/>
    </div>
  )
}

export default ToDoList
