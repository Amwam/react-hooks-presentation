import * as React from 'react';

export class OldCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseX: 0,
      mouseY: 0,
    };
    this.updateMousePosition = this.updateMousePosition.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.updateMousePosition);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.updateMousePosition);
  }

  updateMousePosition(event) {
    this.setState({ mouseX: event.x, mouseY: event.y });
  }

  render() {
    return (
      <div>
        Mouse x: {this.state.mouseX} y: {this.state.mouseY}
      </div>
    );
  }
}
