import React, { Component } from 'react';

export default class CardView extends Component {
  render() {
    return (
      <div className="card">
        {this.props.children}
      </div>
    );
  }
}
