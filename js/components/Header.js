import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';
import colors from '../utils/colors.js';

class Header extends LitElement {
  static get properties () {
    return {
      text: { type: String }
    };
  }

  static get styles () {
    return css`
    :host {
      display: block;
      color: ${colors.header.text};
      text-align: center;
      background: ${colors.header.background};
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      transform: translate3d(0, 0, 0);
      z-index: 2;
      padding: 10px;
    }

    @media print {
      :host {
        display: none;
      }
    }

    .container {
      display: flex;
      max-width: 800px;
      margin: 0 auto;
    }

    img {
      filter: invert(0.6);
      width: 16px;
      height: 16px;
      vertical-align: middle;
    }

    a {
      flex-grow: 1;
      display: inline-block;
      text-transform: capitalize;
      text-decoration: none;
      color: ${colors.header.link};
      vertical-align: middle;
      font-size: 11pt;
    }
    
    a:hover, a.active {
      color: ${colors.header.text};
      border-bottom: none;
    }

    a:hover img, a.active img {
      filter: invert(1);
    }

    @media (max-width: 600px) {
        font-size: 12pt;
    }

    span {
      vertical-align: middle;  
    }

    @media (max-width: 600px) {
      span {
        display: none;
      }
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
    const links = ['about', 'experience', 'skills', 'education', 'projects', 'resume'];
    const page = location.hash.replace('#', '');

    return html`
    <div>
      <div class="container">
        ${links.map(link =>
          html`<a href="#${link}" class=${page === link ? 'active' : ''}>
            <img src="images/${link}.svg"> <span>${link}</span>
          </a>`
        )}
      </div>
    </div>
    `;
  }
}

customElements.define('r-header', Header);
