import React from 'react';
import Radium from 'radium';
import icons from '../utils/icons';
import SkillBar from './SkillBar';
import Carousel from './Carousel';

const Experience = ({ title, company, url, startDate, endDate, duration, skills, images, description }) =>
  <div
    style={{
      marginTop: 15
    }}
  >
    <div
      style={{
        fontSize: 18,
        textTransform: 'capitalize'
      }}
    >
      <b>{title}</b>,{" "}
      <img
        style={{
          verticalAlign: 'middle',
          marginRight: 5
        }}
        src={icons[company]}
      />
      <a target="_blank" href={url}>{company}</a>
    </div>
    <div
      style={{
        fontSize: 15
      }}
    >
      {startDate} - {endDate} <i className="fa fa-clock-o"/> {duration}
    </div>
    <SkillBar skills={skills}/>
    <div>
      {
        description.text.map((line, i) =>
          line === '\n' ? <br key={i} /> : <span key={i}>{line} </span>
        )
      }
    </div>
    <ul>
      {description.bullets ? description.bullets.map((bullet, i) => <li key={i}>{bullet}</li>) : ''}
    </ul>
    <Carousel imageUrls={images.list} initialIndex={images.initialIndex}/>
  </div>;

export default Radium(Experience);
