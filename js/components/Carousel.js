import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import Link from './Link';

import colors from '../utils/colors';

const S = {
  root: {
    display: 'inline-block',
    position: 'relative',
    marginTop: 10
  },
  image: {
    width: '100%',
    verticalAlign: 'middle'
  },
  quoteBlock: {
    width: '100%',
    verticalAlign: 'middle',
    display: 'inline-block',
    paddingLeft: 60,
    paddingRight: 60,
    boxSizing: 'border-box',
    lineHeight: '24px',
    marginBottom: 20
  },
  quote: {
    fontSize: 40,
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  author: {
    textAlign: 'right',
    position: 'absolute',
    right: 60,
    zIndex: 1,
    bottom: 20
  },
  bulletsContainer: {
    textAlign: 'center'
  },
  bullet: {
    height: 10,
    width: 10,
    borderRadius: '50%',
    display: 'inline-block'
  },
  navigation: {
    position: 'absolute',
    height: '100%',
    width: '50%',
    display: 'inline-block',
    cursor: 'pointer',
    ':hover': {},
    background: 'none',
    border: 'none',
    padding: 0,
    outline: 'none',
    '-webkit-appearance': 'none'
  },
  navigationLeft: {
    marginRight: '-50%'
  },
  navigationRight: {
    marginLeft: '-50%'
  },
  navigationArrow: {
    height: 50,
    width: 50,
    lineHeight: '50px',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    background: colors.carousel.nav.background
  },
  navigationArrowLeft: {
    left: 0
  },
  navigationArrowRight: {
    right: 0
  },
  navigationArrowHovered: {
    color: colors.carousel.nav.text,
    background: colors.carousel.nav.backgroundHover,
    opacity: 1
  }
};

class Carousel extends Component {

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    initialIndex: PropTypes.number
  };

  static defaultProps = {
    initialIndex: 0
  };

  constructor(props) {
    super(props);
    this.state = { index: props.initialIndex };
  }

  handleLeftClick = () => {
    this.setState({
      index: this.state.index === 0 ? this.props.items.length - 1 : this.state.index - 1
    });
  };

  handleRightClick = () => {
    this.setState({
      index: this.state.index === this.props.items.length - 1 ? 0 : this.state.index + 1
    });
  };

  render() {
    const leftArrowStyle = Radium.getState(this.state, 'left', ':hover') ? S.navigationArrowHovered : {};
    const rightArrowStyle = Radium.getState(this.state, 'right', ':hover') ? S.navigationArrowHovered : {};

    let content = null;

    if (this.props.items[this.state.index].includes('/')) {
      content = <img role="presentation" style={S.image} src={this.props.items[this.state.index]} />;
    } else {
      const itemSplit = this.props.items[this.state.index].split('-');
      const quote = itemSplit[0];
      const author = itemSplit[1];
      content = (
        <div style={S.quoteBlock}>
          <div>
            <div style={S.quote}>&#8220;</div> {quote} <div style={S.quote}>&#8221;</div>
          </div>
          <div style={S.author}>-<Link>{author}</Link></div>
        </div>
      );
    }

    return (
      <div style={S.root}>
        <button
          key="left"
          onClick={this.handleLeftClick}
          style={[S.navigation, S.navigationLeft]}
        >
          <i
            style={[S.navigationArrow, leftArrowStyle, S.navigationArrowLeft]}
            className="fa fa-chevron-left"
          />
        </button>
        {content}
        <button
          key="right"
          onClick={this.handleRightClick}
          style={[S.navigation, S.navigationRight]}
        >
          <i
            key="right"
            style={[S.navigationArrow, rightArrowStyle, S.navigationArrowRight]}
            className="fa fa-chevron-right"
          />
        </button>
        <div style={S.bulletsContainer}>
          {this.props.items.map((url, i) => (
            <div
              key={i}
              style={[
                S.bullet, {
                  background: i === this.state.index ? colors.text : colors.muted,
                  marginLeft: i > 0 ? 5 : 0
                }
              ]}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Radium(Carousel);
