import React from 'react';
import Link from './Link';

const About = () => {
  return (
    <div>
      My name is <span title="Ruh-juht Sai-guhl"><strong>Rajat Sehgal</strong></span>, I am
      a <strong>Senior Software Engineer</strong>, located in the <Link text="Greater Boston"/> area.
      I have been working at <Link text="MathWorks"/> for more than 5 years now. Before that I was
      at <Link text="University of Florida"/>, where I completed
      my <strong>Masters</strong> in <strong>Computer Science</strong> while also working as a
      Software Developer at the <Link text="Florida Museum of Natural History"/>. I was born and
      brought up in <Link text="New Delhi"/>, India where I also earned
      my <strong>Bachelors</strong> in <strong>Computer Science</strong>.
      <br />
      When I'm not at work and my wife is fast asleep, I enjoy working on some software and
      hardware projects like <a href="#Pantry Butler">Pantry Butler</a>
      , <a href="#RAMU">R.A.M.U.</a>, <a href="#One Remote">One Remote</a>
      , <a href="#projects">etc.</a>
    </div>
  );
};

export default About;