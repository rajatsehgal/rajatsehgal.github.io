import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';
import icons from '../utils/icons.js';

class Job extends LitElement {
  static get properties () {
    return {
      name: { type: String },
      company: { type: String },
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
      text-transform: capitalize;
      font-size: 12pt;
    }

    img {
      vertical-align: middle;
      margin-right: 5px;
      height: 18px;
    }

    ul {
      margin: 0;
    }

    carouselContainer {
      text-align: center;
    }

    .descriptionContainer, r-carousel, skill-bar {
      display: var(--resume-mode, block);
    }
    `;
  }

  render () {
    return html`
      <div class="header">
        <b>${this.name}</b>, <img src=${icons[this.company]}>
        <r-link text=${this.company}></r-link>
      </div>
      <slot></slot>
    `;
  }
}

customElements.define('r-job', Job);
