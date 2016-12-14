import React, { Component, PropTypes } from 'react';
import { StyleRoot } from 'radium';
import FastClick from 'fastclick';

import Header from './components/Header';
import Section from './components/Section';

class App extends Component {

  componentDidMount() {
    FastClick.attach(document.body);
  }

  render() {
    const page = this.props.location.pathname.replace('/', '');
    return (
      <StyleRoot>
        <Header />
        <div
          id="content"
          style={{
            maxWidth: 800,
            padding: '0 50px',
            marginTop: page === 'resume' ? 40 : 60,
            boxSizing: 'border-box',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 50,
            userSelect: 'none'
          }}
        >
          {page === 'resume' ? this.props.children : <Section title={page}>{this.props.children}</Section>}
        </div>
      </StyleRoot>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  children: PropTypes.arrayOf(PropTypes.object)
};

export default App;
