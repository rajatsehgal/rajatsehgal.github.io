import React, { PropTypes } from 'react';
import Radium from 'radium';

const S = {
  root: {
    paddingTop: 5,
    paddingBottom: 5
  },
  icon: {
    height: 24,
    width: 24,
    marginRight: 5,
    verticalAlign: 'middle'
  }
};

const SkillBar = ({ skills = [] }) => (
  <div style={S.root}>
    {
      skills.map(skill =>
        <img role="presentation" style={S.icon} key={skill} title={skill} src={`images/${skill}.png`} />
      )
    }
  </div>
);

SkillBar.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string)
};

export default Radium(SkillBar);
