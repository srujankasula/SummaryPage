import React, { Component } from 'react';

export default class PromoSection extends Component {
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
        <div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12" onClick={this.toggle}>
              <span className="pull-left underline">{!this.state.isOpen? "Apply promo code ": "Hide promo code"}</span>
              <span className="pull-left padding20 symbol">{this.state.isOpen ? "-" : "+"}</span>
            </div>
            {
              this.state.isOpen ?
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <span className="pull-left">Promo code</span>
                </div>
                <div className="col-md-8 col-sm-8 col-xs-8">
                  <div className="form-group">
                    <input type="text" className="form-control"/>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-4">
                  <button type="button" className="btn btn-primary">Apply</button>
                </div>
              </div>
              : null
            }
          </div>
        </div>
      </div>
    );
  }
}
