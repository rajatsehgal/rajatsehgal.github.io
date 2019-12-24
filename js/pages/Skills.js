import { LitElement, html, css } from '../../web_modules/lit-element.js';
import '../components/SkillSet.js';
import '../components/Skill.js';

class Skills extends LitElement {
  static get styles () {
    return css`
      skill-set+skill-set {
        margin-top: var(--resume-mode-margin, 15px);
      }
    `;
  }

  render () {
    return html`
      <skill-set name="Languages">
        <r-skill name="HTML"></r-skill>
        <r-skill name="CSS"></r-skill>
        <r-skill name="JavaScript"></r-skill>
      </skill-set>
      <skill-set name="Frameworks">
        <r-skill name="LitElement"></r-skill>
        <r-skill name="Dojo"></r-skill>
        <r-skill name="React"></r-skill>
      </skill-set>
      <skill-set name="Backend">
        <r-skill name="Node.js"></r-skill>
        <r-skill name="Express"></r-skill>
        <r-skill name="MongoDB"></r-skill>
      </skill-set>
      <skill-set name="Tooling">
        <r-skill name="npm"></r-skill>
        <r-skill name="Babel"></r-skill>
        <r-skill name="webpack"></r-skill>
        <r-skill name="ESLint"></r-skill>
      </skill-set>
      <skill-set name="Hardware">
        <r-skill name="Arduino"></r-skill>
        <r-skill name="Raspberry Pi"></r-skill>
      </skill-set>
    `;
  }
}

customElements.define('r-skills', Skills);
