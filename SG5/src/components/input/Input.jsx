import { useState } from 'react'
import './Input.css'


function Input({addTask, editTask, editMode}){
    const [input, setInput] = useState('')

    const placeholder = editMode ? "Edit a Task" : "Add a Task"
    const buttonName = editMode ? "Edit" : "Add Task"
    return(
        <div className='input-elements'>
            <input type="text" placeholder={placeholder} value={input} onChange={(i) => setInput(i.target.value)}/>
            <button type="button" className='button-add' onClick={() => {
                if(editMode){
                    editTask(input)
                } else{
                    addTask(input)
                }
                setInput('')
            }}>{buttonName}</button>
        </div>
    )
}


export default Input