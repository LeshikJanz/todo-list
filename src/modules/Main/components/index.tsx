import * as React from 'react';
import { Header } from "./header";
const styles = require('../styles/style.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);

export const Base = ({ menuType, handleMenu, backToMainPage, children, location }) => (
  <div className="main-container">
    <Header/>
    <h1 className="welcome">Welcome to the TODO App</h1>
    <div className="navMenu" onClick={() => backToMainPage(location.pathname)}>
      <a onClick={handleMenu} className={cx([{ 'active': menuType === 'active' }])}>Active</a>
      <a onClick={handleMenu} className={cx([{ 'active': menuType === 'finished' }])}>Finished</a>
    </div>
    {children}
  </div>
);