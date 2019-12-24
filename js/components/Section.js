import { LitElement, html, css } from '../../web_modules/lit-element.js';
import colors from '../utils/colors.js';

class Section extends LitElement {
  static get properties () {
    return {
      text: { type: String },
      subTitle: { type: String }
    };
  }

  static get styles () {
    return css`
    :host {
      display: block;
      margin-top: var(--resume-mode-margin,60px);
      margin-right: 0;
      margin-bottom: 10px;
      margin-left: 0;
    }

    .title {
      font-size: 13pt;
      text-transform: capitalize;
      display: flex;
    }
    
    .subTitle {
      font-size: 12pt;
      color: ${colors.muted};
    }

    .separator {
      border-bottom: 1px solid ${colors.muted};
      margin: 40px 40px 30px 40px;
      display: var(--resume-mode, block);
    }

    img {
      width: 18px;
      height: 18px;
      margin-right: 5px;
    }
    `;
  }

  render () {
    let subTitleNode;
    if (this.subTitle) {
      subTitleNode = html`
        <span class="subTitle">- ${this.subTitle}</span>
      `;
    }

    return html`
      <div class="title">
        <img src="images/${this.text}.svg"> ${this.text} ${subTitleNode}
      </div>
      <slot></slot>
      <div class="separator"></div>
    `;
  }
}

customElements.define('r-section', Section);
