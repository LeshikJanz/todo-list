import React from 'react'
import { Header } from "./header"
import Board from "components/Board"
import { authorQuoteMap, generateQuoteMap } from '../data'
const styles = require('../styles/style.scss')
const classNames = require('classnames/bind')
const cx = classNames.bind(styles)

const data = {
  medium: generateQuoteMap(100),
  large: generateQuoteMap(500),
};

export const Base = ({ menuType, handleMenu, backToMainPage, children, location }) => (
  <div className="main-container">
    <Header/>
    <Board initial={authorQuoteMap}/>
    <h1 className="welcome">Welcome to the Kanban board App</h1>
    <div className="navMenu" onClick={() => backToMainPage(location.pathname)}>
      <a onClick={handleMenu} className={cx([{ 'active': menuType === 'active' }])}>Active</a>
      <a onClick={handleMenu} className={cx([{ 'active': menuType === 'finished' }])}>Finished</a>
    </div>
    {children}
  </div>
)
