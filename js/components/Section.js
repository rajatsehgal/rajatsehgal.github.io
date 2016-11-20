import React from 'react';
import Radium from 'radium';
import colors from '../utils/colors';
import icons from '../utils/icons';

const S = {
  root: {
    paddingTop: 10
  },
  title: {
    fontSize: 22,
    textTransform: 'capitalize',
    marginBottom: 20
  },
  subTitle: {
    fontSize: 14,
    color: colors.muted
  },
  separator: {
    borderBottom: `1px solid ${colors.muted}`,
    margin: '40px 40px 30px 40px'
  }
};

const Section = ({ title, subTitle, children, headerHeight }) => {
  let subTitleNode;
  if (subTitle) {
    subTitleNode = (
      <span style={S.subTitle}>- {subTitle}</span>
    );
  }

  return (
    <div style={S.root}>
      <div
        id={title}
        style={{ height: headerHeight + 10, marginTop: -headerHeight - 10 }}
      />
      <div style={S.title}>
        <i className={`fa fa-${icons[title]}`} /> {title} {subTitleNode}
      </div>
      {children}
      <div style={S.separator} />
    </div>
  );
};

Section.propTypes = {
  title: React.PropTypes.string,
  subTitle: React.PropTypes.string,
  children: React.PropTypes.children,
  headerHeight: React.PropTypes.number
};

export default Radium(Section);
