import React from 'react';
import Radium from 'radium';

import colors from '../utils/colors';
import links from '../utils/links';

const S = {
  name: {
    color: colors.muted,
    textTransform: 'uppercase',
    fontSize: 14
  },
  icon: {
    width: 24,
    height: 24,
    verticalAlign: 'top',
    marginRight: 3
  },
  skill: {
    display: 'inline-block',
    marginTop: 2
  }
};

const Skills = ({ skillGroups }) => (
  <div>
    {skillGroups.map((skillGroup, i) =>
      <div key={skillGroup.name} style={{ marginTop: i > 0 ? 15 : 0 }}>
        <div style={S.name}>{skillGroup.name}</div>
        {
          skillGroup.list.map((skill, j) =>
            <div
              key={skill}
              style={[S.skill, { marginRight: j < skillGroup.list.length - 1 ? 15 : 0 }]}
            >
              <img
                role="presentation"
                style={S.icon}
                src={`images/${skill}.png`}
              /><a rel="noopener noreferrer" target="_blank" href={links[skill]}>{skill}</a>
            </div>
          )
        }
      </div>
    )}
  </div>
);

Skills.propTypes = {
  skillGroups: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    list: React.PropTypes.arrayOf(React.PropTypes.string)
  }))
};

export default Radium(Skills);
