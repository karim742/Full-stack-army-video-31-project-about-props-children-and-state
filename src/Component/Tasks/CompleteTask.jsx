import React, { useState } from 'react';

function CompletedTask({ task }) {
  const [complete, setComplete] = useState(task.isCompleted);
  function comfunc(e) {
    setComplete((task.isCompleted = true));

    console.log(task);
  }
  return (
    <>
      <input type="checkbox" checked={complete} onChange={comfunc} />
    </>
  );
}

export default CompletedTask;
