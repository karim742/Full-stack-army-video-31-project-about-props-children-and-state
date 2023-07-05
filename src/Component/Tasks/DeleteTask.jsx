import React, { useState } from 'react';

function DeleteTask({ index, tasks }) {
  const delTask = () => {
    tasks.splice(index, 1);
  };
  return (
    <>
      <button onClick={delTask}>Delete</button>
    </>
  );
}

export default DeleteTask;
