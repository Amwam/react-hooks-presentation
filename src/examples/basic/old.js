import React from 'react';

export class OldCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.updateCount = this.updateCount.bind(this);
  }

  updateCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.updateCount}>Click me</button>
        <h1>
          Old is:
          <br /> {this.state.count}
        </h1>
      </div>
    );
  }
}
