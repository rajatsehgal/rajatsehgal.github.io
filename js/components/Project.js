import React from 'react';
import Radium from 'radium';
import colors from '../utils/colors';
import Carousel from './Carousel';
import SkillBar from './SkillBar';

const Project = ({ title, subTitle, description, images, skills, headerHeight }) => (
  <div style={styles.root}>
    <div id={title.replace(/\./g, '')}
         style={{ height: headerHeight + 10, marginTop: -headerHeight - 10 }}></div>
    <div style={styles.title}>{title}</div>
    <div style={styles.subTitle}>{subTitle}</div>
    <SkillBar skills={skills}/>
    <div>{description.text.join(' ')}</div>
    <div style={styles.carouselContainer}>
      <Carousel items={images.list} initialIndex={images.initialIndex}/>
    </div>
  </div>
);

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
  }
};

export default Radium(Project);
