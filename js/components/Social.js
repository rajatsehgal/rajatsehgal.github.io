import React from 'react';
import Radium from 'radium';
import colors from '../utils/colors';

const Social = () => {
  const items = {
    linkedin: 'in/rajatsehgal1988',
    facebook: 'rajat.sehgal',
    twitter: 'rajat_sehgal'
  };
  return (
    <div
      style={{
        margin: '15px 0'
      }}
    >
      {Object.keys(items).map((key, i) =>
        <a
          key={key}
          target="_blank"
          href={`https://www.${key}.com/${items[key]}`}
          style={{
            fontSize: 24,
            borderBottom: 'none',
            textDecoration: 'none',
            color: colors.link,
            marginLeft: i > 0 ? 15 : 0
          }}
        >
          <i className={`fa fa-${key}-square`}/>
        </a>
      )}
    </div>
  );
};

export default Radium(Social);
