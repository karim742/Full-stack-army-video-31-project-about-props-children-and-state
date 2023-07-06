import React, { useState } from 'react';
function DeleteTask({ task, delTask }) {
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
