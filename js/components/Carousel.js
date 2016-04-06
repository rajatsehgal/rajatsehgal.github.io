import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import colors from '../utils/colors';

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
    const leftArrowStyle = Radium.getState(this.state, 'left', ':hover') ? styles.navigationArrowHovered : {};
    const rightArrowStyle = Radium.getState(this.state, 'right', ':hover') ? styles.navigationArrowHovered : {};

    return (
      <div style={styles.root}>
        <div
          key="left"
          onClick={this.handleLeftClick}
          style={[styles.navigation, styles.navigationLeft]}
        >
          <i
            style={[styles.navigationArrow, leftArrowStyle, styles.navigationArrowLeft]}
            className="fa fa-chevron-left"
          />
        </div>
        <img
          style={styles.image}
          src={this.props.imageUrls[this.state.index]}
        />
        <div
          key="right"
          onClick={this.handleRightClick}
          style={[styles.navigation, styles.navigationRight]}
        >
          <i
            key="right"
            style={[styles.navigationArrow, rightArrowStyle, styles.navigationArrowRight]}
            className="fa fa-chevron-right"
          />
        </div>
        <div style={styles.bulletsContainer}>
          {this.props.imageUrls.map((url, i) => (
            <div
              key={i}
              style={[
                styles.bullet, {
                    background: i === this.state.index ? colors.text : colors.muted,
                    marginLeft: i > 0 ? 5 : 0
                }
              ]}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  root: {
    display: 'inline-block',
    position: 'relative'
  },
  image: {
    width: '100%',
    verticalAlign: 'middle'
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
    ':hover': {}
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

export default Radium(Carousel);
