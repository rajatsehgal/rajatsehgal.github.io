import React from 'react';
import Radium from 'radium';
import colors from '../utils/colors';
import Carousel from './Carousel';
import SkillBar from './SkillBar';

const Project = ({ title, subTitle, description, images, skills, headerHeight }) => (
  <div
    style={{
      marginTop: 20
    }}
  >
    <div
      id={title.replace(/\./g, '')}
      style={{
        height: headerHeight + 10,
        marginTop: -headerHeight - 10
      }}
    ></div>
    <div
      style={{
        fontSize: 22,
        textTransform: 'capitalize'
      }}
    >{title}</div>
    <div
      style={{
        fontSize: 16,
        color: colors.muted
      }}
    >{subTitle}</div>
    <SkillBar skills={skills} />
    <div>{description.text.join(' ')}</div>
    <div
      style={{
        textAlign: 'center',
        marginTop: 5
      }}
    >
      <Carousel imageUrls={images.list} initialIndex={images.initialIndex}/>
    </div>
  </div>
);

export default Radium(Project);
