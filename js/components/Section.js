import React from 'react';
import Radium from 'radium';
import colors from '../utils/colors';
import icons from '../utils/icons';

const Section = ({ title, subTitle, children, headerHeight }) => {
  let subTitleNode;
  if (subTitle) {
    subTitleNode = (
      <span style={styles.subTitle}>- {subTitle}</span>
    );
  }

  return (
    <div style={styles.root}>
      <div id={title}
           style={{ height: headerHeight + 10, marginTop: -headerHeight - 10 }}></div>
      <div style={styles.title}>
        <i className={`fa fa-${icons[title]}`}/> {title} {subTitleNode}
      </div>
      {children}
      <div style={styles.separator}/>
    </div>
  );
};

const styles = {
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

export default Radium(Section);
