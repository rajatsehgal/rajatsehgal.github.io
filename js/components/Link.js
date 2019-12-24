import { LitElement, html, css } from '../../web_modules/lit-element.js';
import links from '../utils/links.js';
import colors from '../utils/colors.js';

class Link extends LitElement {
  static get properties () {
    return {
      text: { type: String }
    };
  }

  static get styles () {
    return css`
    :host {
      margin: 15px 0;
    }

    a {
      text-decoration: none;
      color: ${colors.link};
      border-bottom: 1px solid transparent;
    }

    a:hover {
      border-bottom-color: rgb(0, 132, 187);
    }

    @media screen {
        a {
          color: rgb(0, 132, 187);
        }
    }
    
    @media print {
      a {
        color: inherit;        
        border-bottom: none;
      }
  
      @page {
        margin: 0
      }
    }
    `;
  }

  render () {
    return html`<a rel="noopener noreferrer" target="_blank" href="${links[this.text]}">${this.text}</a>`;
  }
}

customElements.define('r-link', Link);
