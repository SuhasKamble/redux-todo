import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, removeTodo } from '../actions'


const Todo = () => {
    const list = useSelector((state) => state.todoReducers.list)
    const dispatch = useDispatch()

    return (
        <div className='todo-container'>
            {
                list.map(item => {
                    return <div className='todo' key={item.id}>
                        <p>{item.data}</p>
                        <i className='fa fa-trash-alt' onClick={() => dispatch(deleteTodo(item.id))}></i>
                    </div>
                })

            }
            {
                list.length > 1 && <div className='remove' onClick={() => dispatch(removeTodo())}>
                    Remove All
                </div>
            }

        </div>
    )
}

export default Todo