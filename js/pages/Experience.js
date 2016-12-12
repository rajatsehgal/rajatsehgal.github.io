import React from 'react';
import Radium from 'radium';
import icons from '../utils/icons';
import SkillBar from '../components/SkillBar';
import Carousel from '../components/Carousel';
import me from '../../me.json';

const S = {
  header: {
    textTransform: 'capitalize',
    fontSize: '12pt'
  },
  logo: {
    verticalAlign: 'middle',
    marginRight: 5,
    height: 18
  }
};

const Experience = ({ resumeMode }) =>
  <div style={S.root}>
    {me.experience.map((exp, i) =>
      <div key={i} style={{ marginTop: i > 0 ? 10 : 0 }}>
        <div style={S.header}>
          <b>{exp.title}</b>, <img role="presentation" style={S.logo} src={icons[exp.company]} />
          <a rel="noopener noreferrer" target="_blank" href={exp.url}>{exp.company}</a>
        </div>
        <div>
          {exp.startDate} - {exp.endDate} <i className="fa fa-clock-o" /> {exp.duration}
        </div>
        <div style={{ display: resumeMode ? 'none' : null }}>
          <SkillBar skills={exp.skills} />
        </div>
        <div style={{ display: resumeMode ? 'none' : null }}>
          {
            exp.description.text.map((line, j) => {
              let result;
              if (line === '\n') {
                result = <br key={j} />;
              } else {
                result = <span key={j}>{line} </span>;
              }
              return result;
            })
          }
        </div>
        <ul style={{ margin: 0 }}>
          {exp.description.bullets ? exp.description.bullets.map((bullet, k) => <li key={k}>{bullet}</li>) : ''}
        </ul>
        <div style={{ display: resumeMode ? 'none' : null, textAlign: 'center' }}>
          <Carousel items={exp.images.list} initialIndex={exp.images.initialIndex} />
        </div>
      </div>
    )}
  </div>;

export default Radium(Experience);
