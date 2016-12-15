import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';

import colors from '../utils/colors';
import icons from '../utils/icons';

const RadiumLink = Radium(Link);

const S = {
  root: {
    color: colors.header.text,
    textAlign: 'center',
    background: colors.header.background,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    transform: 'translate3d(0, 0, 0)',
    zIndex: 2,
    padding: 10,
    '@media print': {
      display: 'none'
    }
  },
  container: {
    display: 'flex',
    maxWidth: 800,
    margin: '0 auto'
  },
  link: {
    flexGrow: 1,
    display: 'inline-block',
    textTransform: 'capitalize',
    textDecoration: 'none',
    color: colors.header.link,
    verticalAlign: 'middle',
    fontSize: '11pt',
    ':hover': {
      color: colors.header.text,
      borderBottom: 'none'
    },
    '@media (max-width: 600px)': {
      fontSize: '12pt'
    }
  },
  linkActive: {
    color: 'white'
  },
  text: {
    '@media (max-width: 600px)': {
      display: 'none'
    }
  }
};

const Header = () => {
  const links = ['about', 'experience', 'skills', 'education', 'projects', 'resume'];

  return (
    <div id="header" style={S.root}>
      <div style={S.container}>
        {links.map(link =>
          <RadiumLink to={link} style={S.link} activeStyle={S.linkActive}>
            <i className={`fa fa-${icons[link]}`} /> <span style={S.text}>{link}</span>
          </RadiumLink>
        )}
      </div>
    </div>
  );
};

export default Radium(Header);
