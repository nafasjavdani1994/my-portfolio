import React from 'react';

// Components
import HeaderSocials from './HeaderSocials';
import CTA from './CTA';
// Styles
import './header.css';
// Image
import ME from '../../assets/me.png';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Nafiseh Javdani</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <CTA />

        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
