import React from 'react';
import Radium from 'radium';
import colors from '../utils/colors';
import icons from '../utils/icons';
import Section from '../components/Section';
import Experience from './Experience';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';

function handlePrintClick(e) {
  window.print();
  e.preventDefault();
}

const S = {
  root: {
    marginTop: 60,
    position: 'relative',
    '@media print': {
      marginTop: 20
    }
  },
  name: {
    fontSize: '15pt',
    marginBottom: 10
  },
  header: {
    color: colors.text,
    borderBottom: `1px solid ${colors.text}`,
    paddingBottom: 10,
    textAlign: 'center'
  },
  webAndEmail: {
    color: colors.muted
  },
  contact: {
    color: colors.muted
  },
  printButton: {
    background: 'none',
    border: 'none',
    padding: 0,
    margin: 0,
    outline: 'none',
    textAlign: 'left',
    '-webkit-appearance': 'none',
    fontFamily: 'inherit',
    cursor: 'pointer',
    fontSize: 'inherit',
    color: 'inherit',
    position: 'absolute',
    top: 0,
    right: 0,
    '@media print': {
      display: 'none'
    }
  }
};

const Resume = () =>
  <div style={S.root}>
    <button style={S.printButton} onClick={handlePrintClick}>
      <i className={`fa fa-${icons.print}`} /> Print
    </button>
    <div id="header" style={S.header}>
      <div style={S.mainContent}>
        <div style={S.name}>Rajat Sehgal</div>
        <div style={S.webAndEmail}><a href="https://rajatsehgal.github.io">https://rajatsehgal.github.io</a> | <a href="mailto:rajatsehgal1988@gmail.com">rajatsehgal1988@gmail.com</a></div>
        <div style={S.contact}><a href="tel:508-246-7658">508-246-7658</a> | 1500 Worcester Rd, Apt 730, Framingham, MA</div>
      </div>
    </div>
    <Section title="experience" resumeMode>
      <Experience resumeMode />
    </Section>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Section title="education" resumeMode>
        <Education resumeMode />
      </Section>
      <Section title="skills" resumeMode>
        <Skills resumeMode />
      </Section>
    </div>
    <Section title="projects" resumeMode>
      <Projects resumeMode />
    </Section>
  </div>;

export default Radium(Resume);
