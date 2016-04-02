import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import colors from '../utils/colors';

const navigationStyle = {
  height: 50,
  width: 50,
  lineHeight: '50px',
  textAlign: 'center',
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  background: colors.carousel.nav.background
};

const hoveredNavigationStyle = {
  color: colors.carousel.nav.text,
  background: colors.carousel.nav.backgroundHover,
  opacity: 1
};

class Carousel extends Component {

  static propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.string),
    initialIndex: PropTypes.number
  };

  static defaultProps = {
    imageUrls: [],
    initialIndex: 0
  };

  constructor(props) {
    super(props);
    this.state = { index: props.initialIndex };
  }

  handleLeftClick = () => {
    this.setState({
      index: this.state.index === 0 ? this.props.imageUrls.length - 1 : this.state.index - 1
    });
  };

  handleRightClick = () => {
    this.setState({
      index: this.state.index === this.props.imageUrls.length - 1 ? 0 : this.state.index + 1
    });
  };

  render() {
    const leftArrowStyle = Radium.getState(this.state, 'left', ':hover') ? hoveredNavigationStyle : {};
    const rightArrowStyle = Radium.getState(this.state, 'right', ':hover') ? hoveredNavigationStyle : {};

    return (
      <div
        style={{
          display: 'inline-block',
          position: 'relative'
        }}
      >
        <div
          key="left"
          onClick={this.handleLeftClick}
          style={{
            position: 'absolute',
            height: '100%',
            width: '50%',
            display: 'inline-block',
            marginRight: '-50%',
            cursor: 'pointer',
            ':hover': {}
          }}
        >
          <i
            style={{ ...navigationStyle, ...leftArrowStyle, left: 0 }}
            className="fa fa-chevron-left"
          />
        </div>
        <img
          style={{
            width: '100%',
            verticalAlign: 'middle'
          }}
          src={this.props.imageUrls[this.state.index]}
        />
        <div
          key="right"
          onClick={this.handleRightClick}
          style={{
            position: 'absolute',
            width: '50%',
            height: '100%',
            display: 'inline-block',
            marginLeft: '-50%',
            cursor: 'pointer',
            ':hover': {}
          }}
        >
          <i
            key="right"
            style={{ ...navigationStyle, ...rightArrowStyle, right: 0 }}
            className="fa fa-chevron-right"
          />
        </div>
        <div
          style={{
            textAlign: 'center'
          }}
        >
          {this.props.imageUrls.map((url, i) => (
            <div
              key={i}
              style={{
                background: i === this.state.index ? colors.text : colors.muted,
                height: 10,
                width: 10,
                borderRadius: '50%',
                display: 'inline-block',
                marginLeft: i > 0 ? 5 : 0
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

export default Radium(Carousel);
