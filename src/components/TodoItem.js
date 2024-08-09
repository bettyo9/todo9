import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <li>
            <span
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    cursor: 'pointer'
                }}
                onClick={onToggle}
            >
                {todo.text}
            </span>
            <button onClick={onDelete}>Delete</button>
        </li>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
