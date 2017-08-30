import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 1
    }
  }

  buttonClicker = () => {
    this.setState({
      clicks: this.state.clicks + 1
    })
  }


  render() {
    return(
      <div>
        <button onClick={this.buttonClicker}>Click</button>
        <h2>Number of clicks: {this.state.clicks}</h2>
      </div>
    );
  }
}
