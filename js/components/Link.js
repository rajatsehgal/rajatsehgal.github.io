import React from 'react';
import links from '../utils/links';

const Link = ({ text }) => {
  return (
    <a target="_blank" href={links[text]}>{text}</a>
  );
};

export default Link;
