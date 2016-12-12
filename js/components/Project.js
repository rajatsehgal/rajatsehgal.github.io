import React, { PropTypes } from 'react';
import Radium from 'radium';
import colors from '../utils/colors';
import Carousel from './Carousel';
import SkillBar from './SkillBar';

const S = {
  title: {
    fontSize: '12pt',
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  subTitle: {
    color: colors.muted
  },
  carouselContainer: {
    textAlign: 'center',
    marginTop: 5
  },
  link: {
    fontSize: '11pt',
    borderBottom: 'none',
    textDecoration: 'none',
    color: colors.link,
    marginLeft: 10
  }
};

const Project = ({ title, subTitle, description, images, skills, githubName, resumeMode }) => {
  const link = githubName ? (<a
    rel="noopener noreferrer"
    target="_blank"
    href={`https://github.com/rajatsehgal/${githubName}`}
    style={[S.link, { display: resumeMode ? 'none' : null }]}
  >
    <i className={'fa fa-github'} />
  </a>) : null;
  return (
    <div style={S.root}>
      <div
        id={title.replace(/\./g, '')}
      />
      <div><span style={S.title}>{title}</span>{link} - <span style={S.subTitle}>{subTitle}</span></div>
      <div style={{ display: resumeMode ? 'none' : null }}>
        <SkillBar skills={skills} />
      </div>
      <div>{description.text.join(' ')}</div>
      <div style={[S.carouselContainer, { display: resumeMode ? 'none' : null }]}>
        <Carousel items={images.list} initialIndex={images.initialIndex} />
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.string),
    initialIndex: PropTypes.number
  })),
  skills: PropTypes.arrayOf(PropTypes.string),
  githubName: PropTypes.string,
  resumeMode: PropTypes.bool
};

export default Radium(Project);
