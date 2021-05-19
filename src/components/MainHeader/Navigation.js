import React from 'react';

import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(authContext) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {authContext.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {authContext.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {authContext.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        )
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
