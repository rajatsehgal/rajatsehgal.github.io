import React from 'react';
import Link from './Link';

const About = () =>
  <div>
    My name is <span title="Ruh-juht Sai-guhl"><strong>Rajat Sehgal</strong></span>, I am
    a <strong>Senior Software Engineer</strong>, located in the <Link>Greater Boston</Link> area.
    I have been working at <Link>MathWorks</Link> for more than 5 years now. Before that I was
    at <Link>University of Florida</Link>, where I completed
    my <strong>Masters</strong> in <strong>Computer Science</strong> while also working as a
    Software Developer at the <Link>Florida Museum of Natural History</Link>. I was born and
    brought up in <Link>New Delhi</Link>, India where I also earned
    my <strong>Bachelors</strong> in <strong>Computer Science</strong>.
    <br />
    When I am not at work and my wife is fast asleep, I enjoy working on some software and
    hardware projects like <a href="#Pantry Butler">Pantry Butler</a>
    , <a href="#RAMU">R.A.M.U.</a>, <a href="#One Remote">One Remote</a>
    , <a href="#projects">etc.</a>
  </div>;

export default About;
