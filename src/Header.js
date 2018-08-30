import React from 'react';
import TopNav from './TopNav';

const Header = props => {
  console.log('Header', props) 
  return(
    <header>
      SWAPI
      <TopNav />
    </header>
  );
}

export default Header