import React from 'react';

//Components
import { NavLink } from "react-router-dom";

// Styles
import "./Header.scss"

// Constants
import { URL } from '@/constants/routes';

interface IProps {
  className?: string
}

export const Header: React.FC<IProps> = (props) => {
  const navs = [
    {
      text: "Все задачи",
      path: URL.TASKS
    },
    {
      text: "Выполненные задачи",
      path: URL.DELETED_TASKS
    },
  ];

  return (
    <header className={`header ${props.className}`}>
      <nav className="header__nav">
        {navs.map((link, index) => {
          return (
            <NavLink className="header__nav-link" activeClassName='header__nav-link--active' to={link.path}>{link.text}</NavLink>)
        })}
      </nav>
    </header>
  )
}