import { LitElement, html, css } from '../../web_modules/lit-element.js';
import '../components/Project.js';

class Projects extends LitElement {
  static get styles () {
    return css`
      r-project+r-project {
        margin-top: 10px;
      }
      
      img {
        width: 100%;
      }
    `;
  }

  render () {
    return html`
      <r-project name="Pantry Butler" subTitle="Rule your kitchen. Plan your meals.">
        <skill-bar skills='["HTML","CSS","JavaScript","React","Node.js","Express","MongoDB","Babel","npm","webpack","ESLint"]'></skill-bar>
        <div>
          A responsive web app built using ReactJS to help you keep track of all the groceries and plan your meals for the week.
        </div>
        <r-carousel index="5">
          <img src="images/pantry-butler-home-screen.png">
          <img src="images/pantry-butler-signup.png">
          <img src="images/pantry-butler-verify.png">
          <img src="images/pantry-butler-login.png">
          <img src="images/pantry-butler-nav.png">
          <img src="images/pantry-butler-pantry.png">
          <img src="images/pantry-butler-fridge.png">
          <img src="images/pantry-butler-freezer.png">
          <img src="images/pantry-butler-buy.png">
          <img src="images/pantry-butler-menu.png">
          <img src="images/pantry-butler-week.png">
          <img src="images/pantry-butler-add-buy.png">
          <img src="images/pantry-butler-update-menu.png">
          <img src="images/pantry-butler-update-week.png">
        </r-carousel>
      </r-project>
      <r-project name="R.A.M.U." subTitle="Robotic Autonomous Mopping Unit">
        <skill-bar skills='["Arduino"]'></skill-bar>
        <div>
          A mopping robot built from scratch, powered by a microprocessor. It can be fitted with a replaceable swiffer mopping pad and roam around autonomously in your home to clean your floors while you do more important things in life.
        </div>
        <r-carousel index="4">
          <img src="images/ramu-tools.jpg">
          <img src="images/ramu-construction-1.jpg">
          <img src="images/ramu-construction-2.jpg">
          <img src="images/ramu-construction-3.jpg">
          <img src="images/ramu-top.jpg">
          <img src="images/ramu-front.jpg">
        </r-carousel>
      </r-project>
      <r-project name="One Remote" subTitle="One remote to rule them all" githubName="one-remote">
        <skill-bar skills='["React Native","Node.js","Express","Raspberry Pi"]'></skill-bar>
        <div>
          An app built using React Native that talks to a Raspberry Pi and controls all the devices in your living room, eliminating the need to manage multiple remotes.
        </div>
        <r-carousel index="1">
          <img src="images/one-remote-home-screen.png">
          <img src="images/one-remote.png">
          <img src="images/one-remote-zoomed.png">
        </r-carousel>
      </r-project>
      <r-project name="Smart Mirror" subTitle="An app that acts as the display for your smart mirror." githubName="smart-mirror">
        <skill-bar skills='["HTML","CSS","JavaScript","React","Babel","npm","webpack","ESLint"]'></skill-bar>
        <div>
          This app provides a dashboard style display, ideal for a smart mirror. Displays useful information such as date, time, weather, travel time to work, top news headlines etc., pulls in the data from various APIs.
        </div>
        <r-carousel index="1">
          <img src="images/smart-mirror-behind-a-mirror.JPG">
          <img src="images/smart-mirror-dashboard.png">
          <img src="images/smart-mirror-landing.png">
        </r-carousel>
      </r-project>
    `;
  }
}

customElements.define('r-projects', Projects);
