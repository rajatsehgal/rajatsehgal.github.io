import React from 'react';
import Radium from 'radium';
import colors from '../utils/colors';
import icons from '../utils/icons';

const Section = ({ title, subTitle, children, headerHeight }) => {
  let subTitleNode;
  if (subTitle) {
    subTitleNode = (
      <span
        style={{
          fontSize: 14,
          color: colors.muted
        }}
      >- {subTitle}</span>
    );
  }

  return (
    <div
      style={{
        paddingTop: 10
      }}
    >
      <div
        id={title}
        style={{
          height: headerHeight + 10,
          marginTop: -headerHeight - 10
        }}
      ></div>
      <div
        style={{
          fontSize: 22,
          textTransform: 'capitalize',
          marginBottom: 20
        }}
      ><i className={`fa fa-${icons[title]}`}/> {title} {subTitleNode}
      </div>
      {children}
      <div
        style={{
          borderBottom: `1px solid ${colors.muted}`,
          margin: '40px 40px 30px 40px'
        }}
      />
    </div>
  );
};

export default Radium(Section);
