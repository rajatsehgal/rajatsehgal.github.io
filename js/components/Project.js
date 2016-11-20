import React from 'react';
import Radium from 'radium';
import colors from '../utils/colors';
import Carousel from './Carousel';
import SkillBar from './SkillBar';

const S = {
  root: {
    marginTop: 20
  },
  title: {
    fontSize: 22,
    textTransform: 'capitalize'
  },
  subTitle: {
    fontSize: 16,
    color: colors.muted
  },
  carouselContainer: {
    textAlign: 'center',
    marginTop: 5
  },
  link: {
    fontSize: 28,
    borderBottom: 'none',
    textDecoration: 'none',
    color: colors.link,
    marginLeft: 10
  }
};

const Project = ({ title, subTitle, description, images, skills, headerHeight, githubName }) => {
  const link = githubName ? (<a
    rel="noopener noreferrer"
    target="_blank"
    href={`https://github.com/rajatsehgal/${githubName}`}
    style={S.link}
  >
    <i className={'fa fa-github'} />
  </a>) : null;
  return (
    <div style={S.root}>
      <div
        id={title.replace(/\./g, '')}
        style={{ height: headerHeight + 10, marginTop: -headerHeight - 10 }}
      />
      <div><span style={S.title}>{title}</span>{link}</div>
      <div style={S.subTitle}>{subTitle}</div>
      <SkillBar skills={skills} />
      <div>{description.text.join(' ')}</div>
      <div style={S.carouselContainer}>
        <Carousel items={images.list} initialIndex={images.initialIndex} />
      </div>
    </div>
  );
};

Project.propTypes = {
  title: React.PropTypes.string,
  subTitle: React.PropTypes.string,
  description: React.PropTypes.string,
  images: React.PropTypes.arrayOf(React.PropTypes.shape({
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    initialIndex: React.PropTypes.number
  })),
  skills: React.PropTypes.arrayOf(React.PropTypes.string),
  headerHeight: React.PropTypes.number,
  githubName: React.PropTypes.string
};

export default Radium(Project);
