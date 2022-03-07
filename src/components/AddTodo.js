import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions';
const AddTodo = () => {
    const [inputData, setInputData] = useState('')
    const dispatch = useDispatch()
    const submitForm = (e) => {
        e.preventDefault()
        if (inputData) {
            dispatch(addTodo(inputData))
            setInputData('')
        }
    }
    return (
        <form onSubmit={submitForm}>
            <input type="text" placeholder='Create a new todo...' value={inputData} onChange={(e) => setInputData(e.target.value)} />
        </form>
    )
}

export default AddTodo