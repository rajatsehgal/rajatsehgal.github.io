import React from 'react';
import links from '../utils/links';

const Link = ({ children }) =>
  <a rel="noopener noreferrer" target="_blank" href={links[children]}>{children}</a>;

Link.propTypes = {
  children: React.PropTypes.string
};

export default Link;
