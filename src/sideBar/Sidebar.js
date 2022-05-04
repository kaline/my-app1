import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
    return (
      <Menu>
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="/projects">
          Projects
        </a>
        <a className="menu-item" href="/events">
          Events
        </a>
        <a className="menu-item" href="/resume">
          Resume
        </a>
      </Menu>
    );
  };