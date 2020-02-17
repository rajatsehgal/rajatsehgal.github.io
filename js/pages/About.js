import { LitElement, html, css } from '../../web_modules/lit-element.js';
import '../components/Link.js';
import '../components/Carousel.js';
import '../components/Social.js';
import '../components/Quote.js';

class About extends LitElement {
  static get styles () {
    return css`
    img {
      border-radius: 50%;
      width: 72px;
      height: 72px;
      float: left;
      margin-right: 5px;
    }
    `;
  }

  render () {
    return html`
    <div>
      <img role="presentation" src="images/me-blur.jpg">
      <div>
        My name is <span title="Ruh-juht Sai-guhl"><strong>Rajat Sehgal</strong></span>, I am
        a <strong>Software Engineering Manager</strong>, located in the <r-link text="Greater Boston"></r-link> area.
        I have been working at <r-link text="MathWorks"></r-link> for more than 9 years now.
        <br>
        Before that I was at <r-link text="University of Florida"></r-link>, where I completed
        my <strong>Masters</strong> in <strong>Computer Science</strong> while also working as a
        Software Developer at the <r-link text="Florida Museum of Natural History"></r-link>. I was born and
        brought up in <r-link text="New Delhi"></r-link>, India where I also earned
        my <strong>Bachelors</strong> in <strong>Computer Science</strong>.
        <br>
        When I am not at work and my wife is fast asleep, I enjoy working on some
        side <r-link text="projects"></r-link>.
      </div>
      <r-social></r-social>
      <r-carousel>
        <r-quote text="Rajat’s deep and growing knowledge of web UI technologies, coupled with his strong design skills make him a powerhouse developer. He is always working to further his knowledge and technique in these areas. As a result he is widely respected and consulted." author="Peter Muellers"></r-quote>
        <r-quote text="Rajat is a hardworking and detail driven individual who likes to deliver very modular and highly extensible code. He's Efficient in analyzing issues and deriving action items. He continually seeks solutions, not blame." author="Saoli Mitra"></r-quote>
        <r-quote text="Rajat is meticulous when it comes to starting a new piece of work. He evaluates and understands the problem statement with respect to use cases, before thinking about the design and implementation details." author="Deepak Anand"></r-quote>
        <r-quote text="I find Rajat to be very easy to work with, very responsive and willing when it comes to answering questions." author="Melissa DeVeau"></r-quote>
        <r-quote text="Rajat possesses excellent communication skills and has been very helpful in sharing his knowledge." author="Koundinya Surepeddi"></r-quote>
        <r-quote text="Rajat has a good command over the language and was able to point out a lot of good practices for writing clean code." author="Keerthi Gurijala"></r-quote>
      </r-carousel>
    </div>
    `;
  }
}

customElements.define('r-about', About);
