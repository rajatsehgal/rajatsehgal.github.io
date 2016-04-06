import React from 'react';
import Radium from 'radium';
import colors from '../utils/colors';

const Social = () => {
  const items = {
    linkedin: 'in/rajatsehgal1988',
    github: 'rajatsehgal',
    facebook: 'rajat.sehgal',
    twitter: 'rajat_sehgal'
  };
  return (
    <div style={styles.root}>
      {Object.keys(items).map((key, i) =>
        <a
          key={key}
          target="_blank"
          href={`https://www.${key}.com/${items[key]}`}
          style={[styles.link, { marginLeft: i > 0 ? 15 : 0 }]}
        >
          <i className={`fa fa-${key}-square`}/>
        </a>
      )}
    </div>
  );
};

const styles = {
  root: {
    margin: '15px 0'
  },
  link: {
    fontSize: 28,
    borderBottom: 'none',
    textDecoration: 'none',
    color: colors.link
  }
};

export default Radium(Social);
