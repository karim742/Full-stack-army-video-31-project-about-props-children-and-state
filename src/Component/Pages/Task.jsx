import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import CreateTask from '../Tasks/CreateTask';
import shortId from 'shortid';
import ShowTask from '../Tasks/ShowTask';

function Task() {
  const [tasks, setTasks] = useState([]);
  const [visibility, setVisibility] = useState('all');

  const addNewTask = (text) => {
    const task = {
      text,
      isCompleted: false,
      createdAt: new Date(),
      id: shortId.generate(),
    };
    setTasks([task, ...tasks]);
  };

  const delTask = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id != id;
      })
    );
  };

  const editTask = (id, inputText) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          inputText ? (task.text = inputText) : alert('input edit text');
        }
        return task;
      })
    );
  };

  return (
    <>
      <Layout>
        <h1>Task</h1>
        <CreateTask addNewTask={addNewTask} />
        <ShowTask tasks={tasks} delTask={delTask} editTask={editTask} />
      </Layout>
    </>
  );
}

export default Task;
