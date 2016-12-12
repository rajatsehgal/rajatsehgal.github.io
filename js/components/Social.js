import React from 'react';
import Radium from 'radium';
import colors from '../utils/colors';

const S = {
  root: {
    margin: '15px 0'
  },
  link: {
    fontSize: '16pt',
    borderBottom: 'none',
    textDecoration: 'none',
    color: colors.link
  }
};

const Social = () => {
  const items = {
    linkedin: 'in/rajatsehgal1988',
    github: 'rajatsehgal',
    facebook: 'rajat.sehgal',
    twitter: 'rajat_sehgal'
  };
  return (
    <div style={S.root}>
      {Object.keys(items).map((key, i) =>
        <a
          key={key}
          rel="noopener noreferrer"
          target="_blank"
          href={`https://www.${key}.com/${items[key]}`}
          style={[S.link, { marginLeft: i > 0 ? 15 : 0 }]}
        >
          <i className={`fa fa-${key}-square`} />
        </a>
      )}
    </div>
  );
};

export default Radium(Social);
