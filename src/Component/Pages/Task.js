import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import CreateTask from '../Tasks/CreateTask';

function Task() {
  const [tasks, setTasks] = useState([]);
  const [visibility, setVisibility] = useState('all');

  const addNewTask = (text) => {
    console.log(text);
  };

  return (
    <>
      <Layout>
        <h1>Task</h1>
        <CreateTask addNewTask={addNewTask} />
      </Layout>
    </>
  );
}

export default Task;
