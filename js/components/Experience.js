import React from 'react';
import Radium from 'radium';
import icons from '../utils/icons';
import SkillBar from './SkillBar';
import Carousel from './Carousel';

const Experience = ({ title, company, url, startDate, endDate, duration, skills, images, description }) =>
  <div style={styles.root}>
    <div style={styles.header}>
      <b>{title}</b>, <img style={styles.logo} src={icons[company]}/>
      <a target="_blank" href={url}>{company}</a>
    </div>
    <div style={styles.subHeader}>
      {startDate} - {endDate} <i className="fa fa-clock-o"/> {duration}
    </div>
    <SkillBar skills={skills}/>
    <div>
      {
        description.text.map((line, i) =>
          line === '\n' ? <br key={i}/> : <span key={i}>{line} </span>
        )
      }
    </div>
    <ul>
      {description.bullets ? description.bullets.map((bullet, i) => <li key={i}>{bullet}</li>) : ''}
    </ul>
    <Carousel imageUrls={images.list} initialIndex={images.initialIndex}/>
  </div>;

const styles = {
  root: {
    marginTop: 15
  },
  header: {
    fontSize: 18,
    textTransform: 'capitalize'
  },
  logo: {
    verticalAlign: 'middle',
    marginRight: 5
  },
  subHeader: {
    fontSize: 15
  }
};

export default Radium(Experience);
