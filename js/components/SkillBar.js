import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';

class SkillBar extends LitElement {
  static get properties () {
    return {
      skills: { type: Array }
    };
  }

  static get styles () {
    return css`
    :host {
      display: var(--resume-mode, block);
      padding-top: 5px;
      padding-bottom: 5px;
    }

    img {
      height: 24px;
      width: 24px;
      margin-right: 5px;
      vertical-align: middle;
    }
    `;
  }

  render () {
    return html`
      <div>
        ${this.skills.map(skill => html`<img role="presentation" title=${skill} src="images/${skill}.png">`)}
      </div>
    `;
  }
}

customElements.define('skill-bar', SkillBar);
