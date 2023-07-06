import React from 'react';
import DeleteTask from './DeleteTask';
import EditTask from './EditTask';
import CompleteTask from './CompleteTask';

function ShowTask({ tasks, delTask, editTask }) {
  return (
    <>
      <div style={{ marginTop: '1rem' }}>
        <h3>All task list</h3>
        {tasks.length > 0 ? (
          <ul style={{ listStyle: 'none' }}>
            {tasks.map((task) => (
              <li
                style={task.isCompleted ? { color: 'green' } : {}}
                key={task.id}
              >
                {<CompleteTask task={task} />}
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
