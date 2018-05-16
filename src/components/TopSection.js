import React, { Component } from 'react';

export default class TopSection extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-8 col-sm-8 col-xs-8">
            <span className="pull-left">Subtotal</span>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-4">
            <span className="pull-right"><strong>$102.96</strong></span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-sm-8 col-xs-8">
            <span className="pull-left underline">Pickup savings</span>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-4">
            <span className="pull-right red"><strong>-$3.85</strong></span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-sm-8 col-xs-8">
            <span className="pull-left">Est. taxes & fees</span>
            <br/>
            <div className="pull-left">(Based on 94085)</div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-4">
            <span className="pull-right"><strong>$8.92</strong></span>
          </div>
        </div>
      </div>
    );
  }
}
