import React from 'react';

export class OldCode extends React.Component {
  constructor(props) {
    super(props);

    this.state = { age: undefined, name: undefined };
    this.updateAge = this.updateAge.bind(this);
    this.updateName = this.updateName.bind(this);
    this.submit = this.submit.bind(this);
  }

  updateName(event) {
    this.setState({ name: event.target.value });
  }

  updateAge(event) {
    this.setState({ age: event.target.value });
  }

  submit() {
    alert(`${this.state.name} is ${this.state.age}`);
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input id="name" value={this.state.name} onChange={this.updateName} />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <br />
          <input id="age" value={this.state.age} onChange={this.updateAge} />
        </div>
        <button type="submit" onClick={this.submit}>
          Submit
        </button>
        <div>
          Name: {this.state.name}. Age: {this.state.age}
        </div>
      </div>
    );
  }
}
