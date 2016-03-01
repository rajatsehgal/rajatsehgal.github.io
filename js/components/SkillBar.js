import React from 'react';
import Radium from 'radium';

const SkillBar = ({ skills = [] }) => (
  <div
    style={{
      paddingTop: 5,
      paddingBottom: 5
    }}
  >{
    skills.map(skill =>
      <img
        style={{
          height: 24,
          width: 24,
          marginRight: 5,
          verticalAlign: 'middle'
        }}
        key={skill}
        title={skill}
        src={`images/${skill}.png`}
      />
    )
  }
  </div>
);

export default Radium(SkillBar);
