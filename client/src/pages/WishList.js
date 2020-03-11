import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';

class WishList extends Component {
  state = {
    wishListData: {}
  };

  componentDidMount() {
    // api call to database to retrieve information from donation item wishlist

  }

  render() {
    return (
      <div>
        <PageHeader pageTitle='Donation Wish List'/>
        <div className='container'>
          <p className='text-center'>In addition to monetary contributions, Higher Learning is also open to donations of specific items that our scholarship recipients will need as they transition to living in dormitories. Below, you'll find the items we are seeking.</p>

          {/* table with donation items */}
        </div>        
      </div>
    )
  }
}

export default WishList;