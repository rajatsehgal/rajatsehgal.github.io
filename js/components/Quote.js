import { LitElement, html, css } from '../../web_modules/lit-element.js';

class Quote extends LitElement {
  static get properties () {
    return {
      text: { type: String },
      author: { type: String }
    };
  }

  static get styles () {
    return css`
    :host {
      width: 100%;
      vertical-align: middle;
      display: inline-block;
      padding-left: 60px;
      padding-right: 60px;
      box-sizing: border-box;
      line-height: 24px;
      margin-bottom: 20px;
    }

    .quote {
      font-size: 40px;
      display: inline-block;
      vertical-align: middle;
    }

    .author {
      text-align: right;
      position: absolute;
      right: 60px;
      z-index: 1;
      bottom: 20px;
    }
    `;
  }

  render () {
    return html`
      <div>
        <div class="quote">&#8220;</div> ${this.text} <div class="quote">&#8221;</div>
      </div>
      <div class="author">-<r-link text="${this.author}"></r-link></div>
    `;
  }
}

customElements.define('r-quote', Quote);
