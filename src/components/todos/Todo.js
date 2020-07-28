// a presentational component that displays our todos
//functional component , returns an li 
import React from 'react'

const Todo = props => {
    return (
    <li>{props.text}</li>
    )
}

export default Todo