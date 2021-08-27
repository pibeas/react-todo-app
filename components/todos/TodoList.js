import React from 'react'
import { TodoListItem } from './TodoListItem';
import PropTypes from 'prop-types'

const TodoList = ({todos, handleToggle, handleDelete}) => {
    return (
        <ul className="list-group list-group-flush">
        {
            todos.map((todo, i) => (
                <TodoListItem key={i} todo={todo} index={i} handleDelete={handleDelete} handleToggle={handleToggle} />
            ))     
        }
        </ul>
    )
}



TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default TodoList



