import React, { useState } from 'react';

function AddTodoForm({ addTodo }) {
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!text.trim()) return;

        addTodo(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task"  // ✅ Updated placeholder
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;
