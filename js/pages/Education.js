import React from 'react';
import Radium from 'radium';
import icons from '../utils/icons';
import links from '../utils/links';
import me from '../../me.json';

const S = {
  header: {
    fontSize: '12pt',
    textTransform: 'capitalize'
  },
  logo: {
    verticalAlign: 'middle',
    marginRight: 5
  },
  link: {
    fontSize: '11pt'
  },
  degree: {
    fontWeight: 'bold',
    fontSize: '11pt'
  }
};

const Education = () =>
  <div>
    {me.education.map((edu, i) =>
      <div key={i}>
        <div style={[S.header, { marginTop: i > 0 ? 10 : 0 }]}>
          <div style={S.degree}>{edu.degree}</div>
          <div>
            <img role="presentation" style={S.logo} src={icons[edu.school]} />
            <a style={S.link} rel="noopener noreferrer" target="_blank" href={links[edu.school]}>{edu.school}</a>
          </div>
        </div>
        <div>
          {edu.startDate} - {edu.endDate} <i className="fa fa-clock-o" /> {edu.duration}
        </div>
      </div>
    )}
  </div>;

export default Radium(Education);
