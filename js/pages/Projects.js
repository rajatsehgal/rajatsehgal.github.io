import React, { PropTypes } from 'react';
import Project from '../components/Project';
import me from '../../me.json';

const Projects = ({ resumeMode }) =>
  <div>
    {me.projects.map((project, i) =>
      <div style={{ marginTop: i > 0 ? 10 : 0 }}>
        <Project
          key={i}
          resumeMode={resumeMode}
          {...project}
        />
      </div>)
    }
  </div>;

Projects.propTypes = {
  resumeMode: PropTypes.bool
};

export default Projects;
