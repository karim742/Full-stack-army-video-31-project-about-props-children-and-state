import React, { useState } from 'react';
function EditTask({ task, editTask }) {
  const [inputText, setInputText] = useState('');

  function editfuc() {
    const id = task.id;
    editTask(id, inputText);
    setInputText('');
  }

  return (
    <>
      <button onClick={editfuc}>Edit</button>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
    </>
  );
}

export default EditTask;
