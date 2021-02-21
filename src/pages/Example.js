import React, { Component } from 'react';

import { InputDate, InputNumber, InputText } from 'elements/Form';

export default class Example extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div
          style={{ height: '100vh ' }}
          className="row align-items-center justify-content-center"
        >
          <div className="row">
            <div className="col-auto">
              <label htmlFor="firstName">First Name</label>
              <InputDate
                max={30}
                onChange={this.handleChange}
                name="value"
                value={this.state.value}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
