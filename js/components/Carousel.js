import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import colors from '../utils/colors';

const navigationStyle = {
  cursor: 'pointer',
  height: 50,
  width: 50,
  lineHeight: '50px',
  textAlign: 'center',
  position: 'relative',
  background: colors.carousel.nav.background,
  ':hover': {
    color: colors.carousel.nav.text,
    background: colors.carousel.nav.backgroundHover,
    opacity: 1
  }
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
    return (
      <div
        style={{
          display: 'inline-block'
        }}
      >
        <i
          key="left"
          onClick={this.handleLeftClick}
          style={{ ...navigationStyle, marginRight: -navigationStyle.width }}
          className="fa fa-chevron-left"
        />
        <img
          style={{
            width: '100%',
            verticalAlign: 'middle'
          }}
          src={this.props.imageUrls[this.state.index]}
        />
        <i
          key="right"
          onClick={this.handleRightClick}
          style={{ ...navigationStyle, marginLeft: -navigationStyle.width }}
          className="fa fa-chevron-right"
        />
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
