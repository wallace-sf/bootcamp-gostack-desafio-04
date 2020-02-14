import React from 'react';
import { MdAccountCircle } from 'react-icons/md'

import './style.css';
import logo from '../../assets/imgs/logo.png'

function Header() {
  return (
    <header className="header">
      <a href="/">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <ul>
        <li>
          <span>Meu perfil</span>
        </li>
        <li>
          <MdAccountCircle />
        </li>
      </ul>
    </header>
  )
}

export default Header;