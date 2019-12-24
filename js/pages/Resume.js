import { LitElement, html, css } from '../../web_modules/lit-element.js';
import colors from '../utils/colors.js';
import '../components/Link.js';
import '../components/Section.js';
import './Experience.js';
import './Skills.js';
import './Education.js';
import './Projects.js';

class Resume extends LitElement {
  static get styles () {
    return css`
    :host {
      margin-top: 60px;
      position: relative;
      --resume-mode: none;
      --resume-mode-margin: 5px;
      display: block;
    }

    @media print {
      :host {
        margin-top: 20px;
      }
    }

    .name {
      font-size: 15pt;
      margin-bottom: 10px;
    }

    .header {
      color: ${colors.text};
      border-bottom: 1px solid ${colors.text};
      padding-bottom: 10px;
      text-align: center;
    }

    .webAndEmail: {
      color: ${colors.muted};
    }

    .contact {
      color: ${colors.muted};
    }

    .printButton {
      background: none;
      border: none;
      padding: 0;
      margin: 0;
      outline: none;
      text-align: left;
      -webkit-appearance: none;
      font-family: inherit;
      cursor: pointer;
      font-size: inherit;
      color: inherit;
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
    }

    @media print {
      .printButton {
        display: none;
      }
    }

    .container {
      display: flex;
      justify-content: space-between;
    }

    img {
      height: 16px;
      width: 16px;
      vertical-align: middle;
    }
    `;
  }

  handlePrintClick (e) {
    window.print();
    e.preventDefault();
  }

  render () {
    return html`
      <button class="printButton" @click=${this.handlePrintClick}>
        <img src="images/print.svg"> Print
      </button>
      <div class="header">
        <div class="mainContent">
          <div class="name">Rajat Sehgal</div>
          <div class="webAndEmail"><r-link text="https://rajatsehgal.github.io"></r-link> | <r-link text="rajatsehgal1988@gmail.com"></r-link></div>
          <div class="contact"><r-link text="508-246-7658"></r-link> | 2A Asaree Dr, Southborough, MA</div>
        </div>
      </div>
      <r-section text="experience">
        <r-experience></r-experience>
      </r-section>
      <div class="container">
        <r-section text="education">
          <r-education></r-education>
        </r-section>
        <r-section text="skills">
          <r-skills></r-skills>
        </r-section>
      </div>
    `;
  }
}

customElements.define('r-resume', Resume);
