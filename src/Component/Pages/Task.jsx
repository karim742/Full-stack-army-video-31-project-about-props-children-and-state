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
      tasks.filter((tasks) => {
        return tasks.id != id;
      })
    );
  };

  return (
    <>
      <Layout>
        <h1>Task</h1>
        <CreateTask addNewTask={addNewTask} />
        <ShowTask tasks={tasks} delTask={delTask} />
      </Layout>
    </>
  );
}

export default Task;
