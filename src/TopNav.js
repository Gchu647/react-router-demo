import React from 'react';
import { NavLink } from 'react-router-dom';

const TopNav = props => {
  return (
    <nav>
      <NavLink exact to='/'>Home</NavLink>
      <NavLink exact to='/planets'>Planets</NavLink>
    </nav>
  )
}

export default TopNav;