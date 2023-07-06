import React from 'react';
function DeleteTask({ task, delTask }) {
  console.log(task);
  function delfuc() {
    const id = task.id;
    delTask(id);
  }
  return (
    <>
      <button onClick={delfuc}>Delete</button>
    </>
  );
}

export default DeleteTask;
