import React, { Component } from 'react';
import { StyleRoot } from 'radium';
import FastClick from 'fastclick';

import Header from './components/Header';
import Section from './components/Section';
import About from './components/About';
import Experience from './components/Experience';
import Social from './components/Social';
import Project from './components/Project';
import Skills from './components/Skills';
import me from '../me.json';

let scrollTimeout, resizeTimeout;
let bodyWidth = document.body.getBoundingClientRect().width;

class App extends Component {

  state = {
    isScrolled: false,
    bodyWidth,
    headerHeight: bodyWidth > 433 ? 140 : 240
  };

  componentDidMount() {
    FastClick.attach(document.body);
    window.addEventListener('resize', () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      resizeTimeout = setTimeout(() => {
        bodyWidth = document.body.getBoundingClientRect().width;
        if (this.state.bodyWidth !== bodyWidth) {
          this.setState({
            bodyWidth,
            headerHeight: bodyWidth > 433 ? 140 : 240
          });
        }
      }, 0);
    });

    window.addEventListener('scroll', () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        const isScrolled = document.body.scrollTop > 10;
        let headerHeight = 56;
        if (isScrolled) {
          headerHeight = 56;
        } else {
          headerHeight = this.state.bodyWidth > 433 ? 140 : 240;
        }
        this.setState({
          isScrolled,
          headerHeight
        });
        document.body.classList.toggle('isScrolled', isScrolled);
      }, 0);
    });
  }

  render() {
    return (
      <StyleRoot>
        <Header isScrolled={this.state.isScrolled}/>
        <div
          id="content"
          style={{
            maxWidth: 600,
            margin: `${this.state.headerHeight}px auto 0 auto`,
            padding: '0 20px',
            userSelect: 'none'
          }}
        >
          <Section title="about" headerHeight={this.state.headerHeight}>
            <About />
            <Social />
          </Section>
          <Section title="skills" headerHeight={this.state.headerHeight}>
            <Skills skillGroups={me.skillGroups}/>
          </Section>
          <Section title="experience" headerHeight={this.state.headerHeight}>
            {me.experience.map((exp, i) => <Experience key={i} {...exp} />)}
          </Section>
          <Section
            title="projects"
            subTitle="Stuff I do when I'm not at work"
            headerHeight={this.state.headerHeight}
          >
            {
              me.projects.map((project, i) =>
                <Project
                  key={i}
                  {...project}
                  headerHeight={this.state.headerHeight}
                />)
            }
          </Section>
        </div>
      </StyleRoot>
    );
  }
}

export default App;
