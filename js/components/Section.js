import React, { PropTypes } from 'react';
import Radium from 'radium';
import colors from '../utils/colors';
import icons from '../utils/icons';

const S = {
  title: {
    fontSize: '13pt',
    textTransform: 'capitalize',
    margin: '30px 0 10px 0'
  },
  subTitle: {
    fontSize: '12pt',
    color: colors.muted
  },
  separator: {
    borderBottom: `1px solid ${colors.muted}`,
    margin: '40px 40px 30px 40px'
  }
};

const Section = ({ title, subTitle, children, resumeMode }) => {
  let subTitleNode;
  if (subTitle) {
    subTitleNode = (
      <span style={S.subTitle}>- {subTitle}</span>
    );
  }

  return (
    <div>
      <div style={S.title}>
        <i className={`fa fa-${icons[title]}`} /> {title} {subTitleNode}
      </div>
      {children}
      <div style={[S.separator, { display: resumeMode ? 'none' : null }]} />
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  children: PropTypes.children,
  resumeMode: PropTypes.bool
};

export default Radium(Section);
