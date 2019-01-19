import Tween from 'rc-tween-one';
import React from 'react';
import ReactDom from 'react-dom';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: {},
    };
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.mouseMove);
  }

  mouseMove = (e) => {
    const x = e.clientX;
    this.setState({
      animation: { x, duration: 1000, ease: 'easeOutQuad' },
    });
  }

  render() {
    return (
      <Tween animation={this.state.animation}
        moment={17}
        style={{ height: 100 }}
      >
        <div>Hello</div>
      </Tween>);
  }
}