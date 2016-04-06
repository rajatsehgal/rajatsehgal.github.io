import React from 'react';
import Radium from 'radium';

const SkillBar = ({ skills = [] }) => (
  <div style={styles.root}>
    {
      skills.map(skill =>
        <img style={styles.icon} key={skill} title={skill} src={`images/${skill}.png`}/>
      )
    }
  </div>
);

const styles = {
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

export default Radium(SkillBar);
