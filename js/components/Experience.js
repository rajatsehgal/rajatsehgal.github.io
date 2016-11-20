import React from 'react';
import Radium from 'radium';
import icons from '../utils/icons';
import SkillBar from './SkillBar';
import Carousel from './Carousel';

const S = {
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

const Experience = ({
  title, company, url, startDate, endDate, duration, skills, images, description
}) =>
  <div style={S.root}>
    <div style={S.header}>
      <b>{title}</b>, <img role="presentation" style={S.logo} src={icons[company]} />
      <a rel="noopener noreferrer" target="_blank" href={url}>{company}</a>
    </div>
    <div style={S.subHeader}>
      {startDate} - {endDate} <i className="fa fa-clock-o" /> {duration}
    </div>
    <SkillBar skills={skills} />
    <div>
      {
        description.text.map((line, i) => {
          let result;
          if (line === '\n') {
            result = <br key={i} />;
          } else {
            result = <span key={i}>{line} </span>;
          }
          return result;
        })
      }
    </div>
    <ul>
      {description.bullets ? description.bullets.map((bullet, i) => <li key={i}>{bullet}</li>) : ''}
    </ul>
    <Carousel items={images.list} initialIndex={images.initialIndex} />
  </div>;

Experience.propTypes = {
  title: React.PropTypes.string,
  company: React.PropTypes.string,
  url: React.PropTypes.string,
  startDate: React.PropTypes.string,
  endDate: React.PropTypes.string,
  duration: React.PropTypes.string,
  skills: React.PropTypes.arrayOf(React.PropTypes.string),
  images: React.PropTypes.arrayOf(React.PropTypes.string),
  description: React.PropTypes.string
};

export default Radium(Experience);
