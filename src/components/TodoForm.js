import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TodoForm({ onAddTodo }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onAddTodo(input);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a new todo"
            />
            <button type="submit">Add</button>
        </form>
    );
}

TodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
};

export default TodoForm;
