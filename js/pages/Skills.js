import React, { PropTypes } from 'react';
import Radium from 'radium';

import colors from '../utils/colors';
import links from '../utils/links';

import me from '../../me.json';

const S = {
  name: {
    color: colors.muted,
    fontWeight: 'bold'
  },
  icon: {
    width: 24,
    height: 24,
    verticalAlign: 'middle',
    marginRight: 3
  },
  link: {
    verticalAlign: 'middle',
  },
  skill: {
    display: 'inline-block',
    marginTop: 2
  }
};

const Skills = ({ resumeMode }) => (
  <div>
    {me.skillGroups.map((skillGroup, i) =>
      <div key={skillGroup.name} style={{ marginTop: !resumeMode && i > 0 ? 15 : 0 }}>
        <div style={[S.name, resumeMode ? { display: 'inline', verticalAlign: 'middle' } : {}]}>{skillGroup.name}: </div>
        {
          skillGroup.list.map((skill, j) =>
            <div
              key={skill}
              style={[S.skill, { marginRight: resumeMode ? 2 : 15 }]}
            >
              <img
                role="presentation"
                style={[S.icon, resumeMode ? { display: 'none' } : {}]}
                src={`images/${skill}.png`}
              /><a style={S.link} rel="noopener noreferrer" target="_blank" href={links[skill]}>{skill}</a>
              {j < skillGroup.list.length - 1 ? <span style={{ display: resumeMode ? null : 'none' }}>,</span> : null}
            </div>
          )
        }
      </div>
    )}
  </div>
);

Skills.propTypes = {
  resumeMode: PropTypes.bool
};

export default Radium(Skills);
