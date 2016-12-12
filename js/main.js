import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, useRouterHistory, withRouter } from 'react-router';
import { StyleRoot } from 'radium';

import { createHashHistory } from 'history';

import App from './App';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

const appHistory = useRouterHistory(createHashHistory)();

render((
  <StyleRoot>
    <Router history={appHistory}>
      <Route path="/" component={withRouter(App)}>
        <IndexRedirect to="about" />
        <Route path="about" component={About} />
        <Route path="experience" component={Experience} />
        <Route path="skills" component={Skills} />
        <Route path="education" component={Education} />
        <Route path="projects" component={Projects} />
        <Route path="resume" component={Resume} />
      </Route>
    </Router>
  </StyleRoot>
), document.getElementById('app'));
