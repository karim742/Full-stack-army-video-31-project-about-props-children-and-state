import React from 'react';
import DeleteTask from './DeleteTask';
import EditTask from './EditTask';

function ShowTask({ tasks, delTask, editTask }) {
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
                {<EditTask task={task} editTask={editTask} />}
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
