import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';
import colors from '../utils/colors.js';

class Social extends LitElement {
  static get styles () {
    return css`
    :host {
      display: block;
      margin: 15px 0;
    }

    a {
      font-size: 16pt;
      border-bottom: none;
      text-decoration: none;
      color: ${colors.link};
    }

    img {
      filter: invert(0.6);
    }

    a:hover img {
      filter: invert(0);
    }
    `;
  }

  render () {
    const items = {
      linkedin: 'in/rajatsehgal1988',
      github: 'rajatsehgal'
    };
    return html`
      <div>
        ${Object.keys(items).map((key, i) =>
          html`
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.${key}.com/${items[key]}"
            >
              <img src="images/${key}.svg">
            </a>
          `
        )}
      </div>
    `;
  }
}

customElements.define('r-social', Social);
