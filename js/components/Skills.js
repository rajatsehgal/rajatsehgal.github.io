import React from 'react';
import Radium from 'radium';

import colors from '../utils/colors';
import links from '../utils/links';

const Skills = ({ skillGroups }) => (
  <div>
    {skillGroups.map((skillGroup, i) =>
      <div
        key={skillGroup.name}
        style={{
          marginTop: i > 0 ? 15 : 0
        }}
      >
        <div
          style={{
            color: colors.muted,
            textTransform: 'uppercase',
            fontSize: 14
          }}
        >{skillGroup.name}</div>
        {
          skillGroup.list.map((skill, j) =>
            <div
              key={skill}
              style={{
                display: 'inline-block',
                marginTop: 2,
                marginRight: j < skillGroup.list.length - 1 ? 15 : 0
              }}
            >
              <img
                style={{
                  width: 24,
                  height: 24,
                  verticalAlign: 'top',
                  marginRight: 3
                }}
                src={`images/${skill}.png`}
              /><a target="_blank" href={links[skill]}>{skill}</a>
            </div>
          )
        }
      </div>
    )}
  </div>
);

export default Radium(Skills);
