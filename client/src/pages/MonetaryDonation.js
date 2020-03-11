import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';

class MonetaryDonation extends Component {
  state = {

  };

  componentDidMount(){};

  // possibly handle input change and form submits 

  render() {
    return (
      <div>
        <PageHeader pageTitle='Make a Monetary Contribution'/>
        
        {/* stripe components */}
      </div>
    )
  }

}

export default MonetaryDonation;