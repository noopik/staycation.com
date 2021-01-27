import React, { Component } from 'react';

import InputNumber from 'elements/Form/InputNumber';

export default class Example extends Component {
  state = {
    value: 1,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div
          style={{ height: '100vh ' }}
          className="row align-items-center justify-content-center"
        >
          <div className="col-auto">
            <InputNumber
              max={30}
              onChange={this.handleChange}
              name="value"
              suffix=" night"
              isSuffixPlural
              value={this.state.value}
            />
          </div>
        </div>
      </div>
    );
  }
}
