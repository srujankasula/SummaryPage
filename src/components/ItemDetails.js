import React, { Component } from 'react';

export default class CardView extends Component {
  constructor(){
    super();
    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    let open = this.state.isOpen;
    this.setState({isOpen: !open})
  }

  render() {
    return (
      <div>
        <div className="row header">
          <div className="col-md-8 col-sm-8 col-xs-8">
            <span className="pull-left"><strong>Est. Total</strong></span>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-4">
            <span className="pull-right"><strong>$102.96</strong></span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-6" onClick={this.toggle}>
            <span className="pull-left underline">{!this.state.isOpen ? "See item details " : "Hide item details "}</span>
            <span className="pull-left padding20 symbol">{this.state.isOpen ? "-" : "+"}</span>
          </div>
          {
            this.state.isOpen ?
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="col-md-4 col-sm-4 col-xs-4">
                <img src="/images/chair.jpeg"/>
              </div>
              <div className="col-md-8 col-sm-8 col-xs-8">
                <span>Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair,</span>
              </div>
            </div>
            : null
          }
        </div>
      </div>
    );
  }
}
