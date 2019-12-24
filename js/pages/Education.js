import { LitElement, html, css } from '../../web_modules/lit-element.js';
import '../components/Degree.js';

class Education extends LitElement {
  static get styles () {
    return css`
      r-degree+r-degree {
        margin-top: 10px;
      }
    `;
  }

  render () {
    return html`
      <r-degree text="Masters in Computer Science" school="University of Florida" startDate="Jan, 2009" endDate="Dec, 2010" duration="2 yrs"></r-degree>
      <r-degree text="Bachelors in Computer Science" school="Jaypee Institute of Information Technology" startDate="Aug, 2005" endDate="May, 2009" duration="4 yrs"></r-degree>
    `;
  }
}

customElements.define('r-education', Education);
