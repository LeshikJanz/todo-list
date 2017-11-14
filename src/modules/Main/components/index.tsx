import * as React from 'react';
import { Header } from "./header";

export const Base = (props) => (
  <div className="main-container">
    <Header/>
    {props.children}
  </div>
);