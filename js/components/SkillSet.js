import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';

class SkillSet extends LitElement {
  static get properties () {
    return {
      name: { type: String }
    };
  }

  static get styles () {
    return css`
    :host {
      display: block;
    }
    .name {
      color: colors.muted;
      font-weight: bold;
    }
    `;
  }

  render () {
    const resumeMode = getComputedStyle(this).getPropertyValue('--resume-mode') === 'none';

    return html`
      <div class="name" style=${resumeMode ? "display: inline; vertical-align: middle" : ""}>${this.name}</div>
      <slot></slot>
    `;
  }
}

customElements.define('skill-set', SkillSet);
