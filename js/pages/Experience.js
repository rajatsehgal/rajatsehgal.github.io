import { LitElement, html, css } from '../../web_modules/lit-element.js';
import '../components/SkillBar.js';
import '../components/Carousel.js';
import '../components/Link.js';
import '../components/Time.js';
import '../components/Job.js';

class Experience extends LitElement {
  static get styles () {
    return css`
    r-job+r-job {
      margin-top: 10px;
    }

    img {
      width: 100%;
    }

    ul {
      margin-block-start: 0;
    }
    `;
  }

  render () {
    return html`
      <r-job name="Software Engineering Manager" company="MathWorks">
        <r-time start="Nov 2017" end="Present" duration="2 yrs 2 mos"></r-time>
      </r-job>
      <r-job name="Senior Software Engineer" company="MathWorks">
        <r-time start="May 2014" end="Oct 2017" duration="3 yrs 6 mos"></r-time>
      </r-job>
      <r-job name="Software Engineer" company="MathWorks">
        <r-time start="Sep 2010" end="Apr 2014" duration="3 yrs 8 mos"></r-time>
        <skill-bar skills='["HTML","CSS","JavaScript","Dojo","Babel","npm","ESLint"]'></skill-bar>
        <div>
          MathWorks is the leading developer of mathematical computing software.
          Engineers and scientists worldwide rely on its products to accelerate the pace of discovery, innovation, and development.
          My work has primarily been focused on MATLAB Online, which is a cloud offering of the MATLAB Desktop software.
          Here are some of the interesting things I've accomplished in my time here:
          <ul>
            <li>Developed MATLAB Online, a cloud offering of the MATLAB Desktop software.</li>
            <li>Partnered with Usability, Visual Design and Quality Engineering to bring innovative features to life.</li>
            <li>Built numerous infrastructure services and features for MATLAB Desktop environment.</li>
            <li>Created a core set of reusable widgets for MathWorks to facilitate App building for MATLAB Toolboxes.</li>
            <li>Drive adoption of new web technologies like ES6+, Web Components etc. to keep development stack up to date and take advantage of new platform features.</li>
            <li>Defined the process for MathWorks' contribution to  open source community like Dojo foundation.</li>
          </ul>
        </div>
        <r-carousel index="1">
          <img src="images/matlab-one.png">
          <img src="images/matlab-two.png">
          <img src="images/matlab-three.png">
          <img src="images/matlab-four.png">
        </r-carousel>
      </r-job>
      <r-job name="Software Developer" company="Florida Museum of Natural History">
        <r-time start="Oct 2009" end="Aug 2010" duration="11 mos"></r-time>
        <skill-bar skills='["HTML","CSS","JavaScript"]'></skill-bar>
        <div>
          Florida Museum of Natural History is Florida's official state natural history museum and one of the nation’s largest and fastest-growing natural history museums.
          Museum researchers investigate bird extinctions on Pacific islands, document shark attacks worldwide, monitor endangered and threatened species, and explore the genetic codes.
          <ul>
            <li>Developed an information management and analytical web application, which provides informatics support for phylodiversity and biodiversity research.</li>
          </ul>
        </div>
        <r-carousel>
          <img src="images/tolkin-one.png">
          <img src="images/tolkin-two.png">
        </r-carousel>
      </r-job>
    `;
  }
}

customElements.define('r-experience', Experience);
