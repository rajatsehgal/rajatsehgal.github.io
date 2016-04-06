import React from 'react';
import Radium from 'radium';

import colors from '../utils/colors';
import links from '../utils/links';

const Skills = ({ skillGroups }) => (
  <div>
    {skillGroups.map((skillGroup, i) =>
      <div key={skillGroup.name} style={{marginTop: i > 0 ? 15 : 0}}>
        <div style={styles.name}>{skillGroup.name}</div>
        {
          skillGroup.list.map((skill, j) =>
            <div key={skill}
                 style={[styles.skill, { marginRight: j < skillGroup.list.length - 1 ? 15 : 0 }]}
            >
              <img
                style={styles.icon}
                src={`images/${skill}.png`}
              /><a target="_blank" href={links[skill]}>{skill}</a>
            </div>
          )
        }
      </div>
    )}
  </div>
);

const styles = {
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

export default Radium(Skills);
