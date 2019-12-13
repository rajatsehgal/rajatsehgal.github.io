import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';
import colors from '../utils/colors.js';
import './Carousel.js';
import './SkillBar.js';

class Project extends LitElement {
  static get properties () {
    return {
      name: { type: String },
      subTitle: { type: String },
      githubName: { type: String }
    };
  }

  static get styles () {
    return css`
    .name {
      font-size: 12pt;
      font-weight: bold;
      text-transform: capitalize;
    }

    .subTitle {
      color: ${colors.muted}
    }

    img {
      height: 16px;
      width: 16px;
      vertical-align: middle;
    }

    .carouselContainer {
      text-align: center;
      margin-top: 5px;
      display: var(--resume-mode, block);
    }

    .link {
      font-size: 11pt;
      border-bottom: none;
      text-decoration: none;
      color: ${colors.link};
    }

    a {
      display: var(--resume-mode, inline);
    }

    skill-bar, ::slotted(*) {
      display: var(--resume-mode, block);
    }
    `;
  }

  render () {
    const link = this.githubName ? html`<a
      rel="noopener noreferrer"
      target="_blank"
      href="https://github.com/rajatsehgal/${this.githubName}"
      class="link"
    >
      <img src="images/github.svg">
    </a>` : null;

    return html`
    <div>
      <div id="${this.name.replace(/\./g, '')}"></div>
      <div>
        <span class="name">${this.name}</span>${link} - <span class="subTitle">${this.subTitle}</span>
      </div>
      <slot></slot>
    </div>
    `;
  }
}

customElements.define('r-project', Project);
