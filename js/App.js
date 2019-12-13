import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';
import './components/Header.js';
import './components/Section.js';
import './pages/About.js';
import './pages/Education.js';
import './pages/Experience.js';
import './pages/Projects.js';
import './pages/Resume.js';
import './pages/Skills.js';

class App extends LitElement {
  static get styles () {
    return css`
    :host {
      display: block;
      max-width: 800px;
      padding: 0 50px;
      margin-top: 40px;
      box-sizing: border-box;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 50px;
      user-select: none;
    }
    `;
  }

  constructor () {
    super();
    window.addEventListener('hashchange', () => {
      this.requestUpdate();
    }, false);
  }

  render () {
    const page = location.hash.replace('#', '');

    let pageNode = null;
    let title = null;

    switch (page) {
      case 'about':
        title = page;
        pageNode = html`<r-about></r-about>`;
        break;
      case 'experience':
        title = page;
        pageNode = html`<r-experience></r-experience>`;
        break;
      case 'skills':
        title = page;
        pageNode = html`<r-skills></r-skills>`;
        break;
      case 'education':
        title = page;
        pageNode = html`<r-education></r-education>`;
        break;
      case 'projects':
        title = page;
        pageNode = html`<r-projects></r-projects>`;
        break;
      case 'resume':
        title = page;
        pageNode = html`<r-resume></r-resume>`;
        break;
      default:
        title = 'about';
        pageNode = html`<r-about></r-about>`;
    }

    if (title === 'resume') {
      return html`<r-header></r-header>${pageNode}`;
    } else {
      return html`
        <r-header></r-header>
        <r-section text=${title}>${pageNode}</r-section>
      `;
    }
  }
}

customElements.define('r-app', App);
