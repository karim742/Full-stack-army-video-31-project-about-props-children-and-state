import React from 'react';
import classes from './Layout.module.css';
import { Link } from '@reach/router';

function Layout({ children }) {
  const pathName = window.location.pathname;
  return (
    <div>
      <nav className={classes.navbar}>
        <div className="brand">
          <h1>Brand Name</h1>
        </div>
        <div className={classes.item}>
          <ul>
            <li>
              <Link to="/" className={pathName === '/' ? classes.active : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={pathName === '/about' ? classes.active : ''}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/help"
                className={pathName === '/help' ? classes.active : ''}
              >
                Help
              </Link>
            </li>
            <li>
              <Link
                to="/clock"
                className={pathName === '/clock' ? classes.active : ''}
              >
                Clock
              </Link>
            </li>
            <li>
              <Link
                to="/task"
                className={pathName === '/task' ? classes.active : ''}
              >
                Task
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className={classes.container}>{children}</div>
      <footer className={classes.footer}>
        <div className={classes.footerList}>
          <ul>
            <li>company</li>
            <li>sells</li>
            <li>contact</li>
            <li>location</li>
          </ul>
        </div>
        <div className={classes.footerList}>
          <ul>
            <li>company</li>
            <li>sells</li>
            <li>contact</li>
            <li>location</li>
          </ul>
        </div>
        <div className={classes.footerList}>
          <ul>
            <li>company</li>
            <li>sells</li>
            <li>contact</li>
            <li>location</li>
          </ul>
        </div>
        <div className={classes.footerList}>
          <ul>
            <li>company</li>
            <li>sells</li>
            <li>contact</li>
            <li>location</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
