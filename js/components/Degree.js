import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';
import icons from '../utils/icons.js';

class Degree extends LitElement {
  static get properties () {
    return {
      text: { type: String },
      degree: { type: String },
      school: { type: String },
      startDate: { type: String },
      endDate: { type: String },
      duration: { type: String }
    };
  }

  static get styles () {
    return css`
    :host {
      display: block;
    }

    .header {
      font-size: 12pt;
      text-transform: capitalize;
    }

    img {
      vertical-align: middle;
      margin-right: 5px;
    }

    r-link {
      font-size: 11pt;
    }
    
    .text {
      font-weight: bold;
      font-size: 11pt;
    }

    div+.header {
      margin-top: 10px;
    }
    `;
  }

  render () {
    return html`
      <div class="header">
        <div class="text">${this.text}</div>
        <div>
          <img role="presentation" src=${icons[this.school]}><r-link text=${this.school}></r-link>
        </div>
      </div>
      <r-time start=${this.startDate} end=${this.endDate} duration=${this.duration}></r-time>
    `;
  }
}

customElements.define('r-degree', Degree);
