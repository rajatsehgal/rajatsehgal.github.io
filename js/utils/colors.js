import { LitElement, html, css } from '../../web_modules/lit-element.js';

const charcoal = css`#333`;
const charcoalTranslucent = css`rgba(51, 51, 51, 0.3)`;
const white = css`#eee`;
const grey = css`#888`;
const blue = css`rgb(0, 132, 187)`;

const colors = {
  header: {
    background: charcoal,
    text: white,
    link: grey
  },
  carousel: {
    nav: {
      background: charcoalTranslucent,
      backgroundHover: charcoal,
      text: white
    }
  },
  text: charcoal,
  muted: grey,
  link: blue
};

export default colors;
