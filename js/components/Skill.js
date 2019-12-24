import { LitElement, html, css } from '../../web_modules/lit-element.js';

class Skill extends LitElement {
  static get properties () {
    return {
      name: { type: String }
    };
  }

  static get styles () {
    return css`
    .icon {
      width: 24px;
      height: 24px;
      vertical-align: middle;
      margin-right: 3px;
    }

    r-link {
      vertical-align: middle;
    }

    .skill {
      display: inline-block;
      margin-top: 2px;
    }

    img {
      display: var(--resume-mode, inline);
    }
    `;
  }

  render () {
    const resumeMode = getComputedStyle(this).getPropertyValue('--resume-mode') === 'none';
    return html`
      <div class="skill" style="margin-right: ${resumeMode ? '2px' : '15px'}">
        <img class="icon" src="images/${this.name}.png"><r-link text=${this.name}></r-link>
      </div>
    `;
  }
}

customElements.define('r-skill', Skill);
