import React from 'react';
import DeleteTask from './DeleteTask';

function ShowTask({ tasks }) {
  return (
    <>
      <div style={{ marginTop: '1rem' }}>
        <h3>All task list</h3>
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task, index, tasks) => (
              <li key={task.id}>
                {task.text}
                {<DeleteTask index={index} tasks={tasks} />}
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
