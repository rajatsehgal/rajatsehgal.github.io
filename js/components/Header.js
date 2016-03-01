import React from 'react';
import Radium from 'radium';

import colors from '../utils/colors';

const Header = ({ isScrolled }) => {
  const imgSize = isScrolled ? 32 : 100;
  const links = ['about', 'experience', 'skills', 'projects'];

  return (
    <div
      id="header"
      style={{
        background: colors.header.background,
        color: colors.header.text,
        padding: isScrolled ? 0 : 20,
        textAlign: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        transform: 'translate3d(0, 0, 0)',
        zIndex: 1
      }}
    >
      <img
        src="images/me-blur.jpg"
        style={{
          borderRadius: '50%',
          width: imgSize,
          height: imgSize,
          verticalAlign: 'middle'
        }}
      />
      <div
        style={{
          display: 'inline-block',
          verticalAlign: 'middle',
          margin: 15
        }}
      >
        <div
          style={{
            fontSize: 24,
            marginBottom: 20,
            display: isScrolled ? 'none' : 'block'
          }}
        >
          Rajat Sehgal
        </div>
        <div>
          {links.map((link, i) =>
            <a
              key={link}
              href={`#${link}`}
              style={{
                textDecoration: 'none',
                color: colors.header.link,
                marginLeft: i > 0 ? 15 : 0,
                verticalAlign: 'middle',
                ':hover': {
                  color: colors.header.text,
                  borderBottom: `1px solid ${colors.header.text}`
                }
              }}
            >{link[0].toUpperCase() + link.slice(1)}</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Radium(Header);
