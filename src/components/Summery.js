import React, { Component } from 'react';
import TopSection from './TopSection';
import ItemDetails from './ItemDetails';
import PromoSection from './PromoSection';

export default class Summery extends Component {
  render() {
    return (
      <div className="summery">
        <TopSection />
        <hr/>
        <ItemDetails />
        <hr/>
        <PromoSection />
      </div>
    );
  }
}
