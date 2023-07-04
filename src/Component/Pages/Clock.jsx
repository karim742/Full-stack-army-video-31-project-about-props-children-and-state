import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';
function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, [date]);
  return (
    <>
      <Layout>
        <h1>Clock</h1>
        <h3>
          {date.getHours() > 12 ? date.getHours() - 12 : date.getHours()} hr :{' '}
          {date.getMinutes() < 10 ? `0${data.getMinutes()}` : date.getMinutes()}{' '}
          mn :{' '}
          {date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()}{' '}
          se
        </h3>
      </Layout>
    </>
  );
}

export default Clock;
