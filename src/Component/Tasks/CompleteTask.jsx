import React, { useState } from 'react';

function CompletedTask({ task, toggleTask }) {
  function comfunc() {
    const id = task.id;
    toggleTask(id);
  }
  return (
    <>
      <input type="checkbox" onChange={comfunc} />
    </>
  );
}

export default CompletedTask;
