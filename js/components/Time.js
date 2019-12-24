import { LitElement, html, css } from '../../web_modules/lit-element.js';

class Time extends LitElement {
  static get properties () {
    return {
      start: { type: String },
      end: { type: String },
      duration: { type: String }
    };
  }

  static get styles () {
    return css`
    :host {
      display: block;
    }

    img {
      width: 14px;
      height: 14px;
      vertical-align: middle;
    }
    `;
  }

  render () {
    return html`
      ${this.start} - ${this.end} <img src="images/time.svg"> ${this.duration}
    `;
  }
}

customElements.define('r-time', Time);
