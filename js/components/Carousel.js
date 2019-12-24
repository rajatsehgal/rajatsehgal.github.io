import { LitElement, html, css } from '../../web_modules/lit-element.js';
import './Link.js';
import colors from '../utils/colors.js';

class Carousel extends LitElement {
  static get properties () {
    return {
      index: { type: Number }
    };
  }

  static get styles () {
    return css`
    :host {
      display: var(--resume-mode, block);
      text-align: center;
      position: relative;
      padding: 10px;
    }

    img {
      width: 100%;
      vertical-align: middle;
    }

    .bulletsContainer {
      text-align: center;
    }

    .bullet {
      height: 10px;
      width: 10px;
      border-radius: 50%;
      display: inline-block;
    }

    .content {
      display: inline-block;
    }

    .navigation {
      position: absolute;
      height: 100%;
      width: 50%;
      display: inline-block;
      cursor: pointer;
      background: none;
      border: none;
      padding: 0;
      outline: none;
      -webkit-appearance: none;
    }

    .navigationLeft {
      margin-right: -50%;
    }

    .navigationRight {
      margin-left: -50%;
    }

    .navigationArrow {
      height: 50px;
      width: 50px;
      line-height: 50px;
      text-align: center;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      background: ${colors.carousel.nav.background}
    }

    .navigationArrow img {
      width: 16px;
      height: 16px;
    }

    .navigationArrowLeft {
      left: 0
    }

    .navigationArrowRight {
      right: 0
    }

    .navigation:hover img {
      filter: invert(1);
    }

    .navigation:hover .navigationArrow {
      color: ${colors.carousel.nav.text};
      background: ${colors.carousel.nav.backgroundHover};
      opacity: 1;
    }
    `;
  }

  constructor () {
    super();
    this.index = 0;
  }

  handleLeftClick () {
    this.index = this.index === 0 ? this.children.length - 1 : this.index - 1;
  }

  handleRightClick () {
    this.index = this.index === this.children.length - 1 ? 0 : this.index + 1;
  }

  render () {
    Array.from(this.children).forEach((c, i) => {
      c.style.display = i === this.index ? 'block' : 'none';
    });

    return html`
      <button @click=${this.handleLeftClick} class="navigation navigationLeft">
        <i class="navigationArrow navigationArrowLeft"><img src="images/left.svg"></i>
      </button>
      <div class="content"><slot></slot></div>
      <button @click=${this.handleRightClick} class="navigation navigationRight">
        <i class="navigationArrow navigationArrowRight"><img src="images/right.svg"></i>
      </button>
      <div class="bulletsContainer">
        ${Array.from(this.children).map((url, i) => html`<div
            class="bullet"
            style="background-color: ${i === this.index ? colors.text : colors.muted};margin-left: ${i > 0 ? '5px' : 0};"
          ></div>`)}
      </div>
    `;
  }
}

customElements.define('r-carousel', Carousel);
