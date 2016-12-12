import React from 'react';
import Link from '../components/Link';
import Carousel from '../components/Carousel';
import Social from '../components/Social';
import me from '../../me.json';

const S = {
  image: {
    borderRadius: '50%',
    width: 72,
    height: 72,
    float: 'left',
    marginRight: 5
  }
};

const About = () =>
  <div>
    <img role="presentation" src="images/me-blur.jpg" style={S.image} />
    <div>
      My name is <span title="Ruh-juht Sai-guhl"><strong>Rajat Sehgal</strong></span>, I am
      a <strong>Senior Software Engineer</strong>, located in the <Link>Greater Boston</Link> area.
      I have been working at <Link>MathWorks</Link> for more than 6 years now.
      <br />
      Before that I was at <Link>University of Florida</Link>, where I completed
      my <strong>Masters</strong> in <strong>Computer Science</strong> while also working as a
      Software Developer at the <Link>Florida Museum of Natural History</Link>. I was born and
      brought up in <Link>New Delhi</Link>, India where I also earned
      my <strong>Bachelors</strong> in <strong>Computer Science</strong>.
      <br />
      When I am not at work and my wife is fast asleep, I enjoy working on some
      side <a href="#projects">projects</a>.
    </div>
    <Social />
    <Carousel items={me.quotes} />
  </div>;

export default About;
