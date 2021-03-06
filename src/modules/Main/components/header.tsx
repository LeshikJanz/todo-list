import * as React from 'react';
import '../styles/style.scss';
import { Link } from 'react-router';
import { urls } from "urls";

export const Header = () => (
  <div className="headerContainer">
    <Link to={urls.todo}>
      <img src="assets/icons/create-new.png"/>
    </Link>
    <div className="headerText">Todo list implemented by Alex Tereshko</div>
  </div>
);
