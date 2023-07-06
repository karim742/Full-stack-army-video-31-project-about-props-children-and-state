import React from 'react';
import DeleteTask from './DeleteTask';

function ShowTask({ tasks, delTask }) {
  return (
    <>
      <div style={{ marginTop: '1rem' }}>
        <h3>All task list</h3>
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                {task.text}
                {<DeleteTask task={task} delTask={delTask} />}
              </li>
            ))}
          </ul>
        ) : (
          <p>No task found</p>
        )}
      </div>
    </>
  );
}

export default ShowTask;
