import React from 'react';
import Radium from 'radium';
import colors from '../utils/colors';
import Carousel from './Carousel';
import SkillBar from './SkillBar';

const Project = ({ title, subTitle, description, images, skills, headerHeight, githubName }) => {
  const link = githubName ? <a
    target="_blank"
    href={`https://github.com/rajatsehgal/${githubName}`}
    style={styles.link}
  >
    <i className={'fa fa-github'}/>
  </a> : null;
  return (
    <div style={styles.root}>
      <div id={title.replace(/\./g, '')}
           style={{ height: headerHeight + 10, marginTop: -headerHeight - 10 }}></div>
      <div><span style={styles.title}>{title}</span>{link}</div>
      <div style={styles.subTitle}>{subTitle}</div>
      <SkillBar skills={skills}/>
      <div>{description.text.join(' ')}</div>
      <div style={styles.carouselContainer}>
        <Carousel items={images.list} initialIndex={images.initialIndex}/>
      </div>
    </div>
  );
};

const styles = {
  root: {
    marginTop: 20
  },
  title: {
    fontSize: 22,
    textTransform: 'capitalize'
  },
  subTitle: {
    fontSize: 16,
    color: colors.muted
  },
  carouselContainer: {
    textAlign: 'center',
    marginTop: 5
  },
  link: {
    fontSize: 28,
    borderBottom: 'none',
    textDecoration: 'none',
    color: colors.link,
    marginLeft: 10
  }
};

export default Radium(Project);
