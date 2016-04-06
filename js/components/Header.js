import React from 'react';
import Radium from 'radium';

import colors from '../utils/colors';

const Header = ({ isScrolled }) => {
  const imgSize = isScrolled ? 32 : 100;
  const links = ['about', 'experience', 'skills', 'projects'];

  return (
    <div id="header" style={[styles.root, {padding: isScrolled ? 0 : 20}]}>
      <img
        src="images/me-blur.jpg"
        style={[styles.image, {width: imgSize, height: imgSize}]}
      />
      <div style={styles.mainContent}>
        <div style={[styles.name, { display: isScrolled ? 'none' : 'block'}]}>Rajat Sehgal</div>
        <div>
          {links.map((link, i) =>
            <a key={link} href={`#${link}`} style={[styles.link, {marginLeft: i > 0 ? 15 : 0}]}>
              {link[0].toUpperCase() + link.slice(1)}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  root: {
    background: colors.header.background,
    color: colors.header.text,
    textAlign: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    transform: 'translate3d(0, 0, 0)',
    zIndex: 1
  },
  image: {
    borderRadius: '50%',
    verticalAlign: 'middle'
  },
  mainContent: {
    display: 'inline-block',
    verticalAlign: 'middle',
    margin: 15
  },
  name: {
    fontSize: 24,
    marginBottom: 20
  },
  link: {
    textDecoration: 'none',
    color: colors.header.link,
    verticalAlign: 'middle',
    ':hover': {
      color: colors.header.text,
      borderBottom: `1px solid ${colors.header.text}`
    }
  }
};

export default Radium(Header);
