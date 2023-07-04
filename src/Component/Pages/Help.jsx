import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';

const data = [
  {
    name: 'Abdullah Turky',
    email: 'turky@test.com',
  },
  {
    name: 'Arjun Roy',
    email: 'arjun@test.com',
  },
  {
    name: 'Fahim Faisal',
    email: 'fahim@test.com',
  },
  {
    name: 'Helal',
    email: 'helal@test.com',
  },
  {
    name: 'Tushar Imran',
    email: 'tushar@test.com',
  },
];

function Help() {
  const [state, setState] = useState({});
  useEffect(() => {
    setTimeout(() => {
      setState({ name: 'Tushar' });
    }, 2000);
  }, []);
  return (
    <>
      <Layout>
        <h1>Hello, {state.name ? state.name : 'Guest'} I am a Help Page</h1>
        <h2 style={{ margin: '1rem' }}>Some people lists</h2>
        <ul>
          {data.length > 0 ? (
            data.map((man, index) => (
              <li key={index}>
                {man.name} - ({man.email})
              </li>
            ))
          ) : (
            <p>People not found</p>
          )}
        </ul>
      </Layout>
    </>
  );
}

export default Help;
