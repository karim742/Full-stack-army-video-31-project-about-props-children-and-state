import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';

function Help() {
  const [state, setState] = useState({});
  useEffect(() => {
    setTimeout(() => {
      setState({ name: 'Tushar' });
      console.log('setTimeOut rendering');
    }, 2000);
  }, []);
  console.log('help component rendering');
  return (
    <>
      <Layout>
        <h1>Hello, {state.name ? state.name : 'Guest'} I am a Help Page</h1>
      </Layout>
    </>
  );
}

export default Help;
