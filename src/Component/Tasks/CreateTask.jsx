import React, { useState } from 'react';

function CreateTask({ addNewTask }) {
  const [text, setText] = useState('');
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="type your task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => {
            text ? addNewTask(text) : alert('Write your task');
            setText('');
          }}
        >
          Create Task
        </button>
      </div>
    </>
  );
}

export default CreateTask;
