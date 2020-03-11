import React from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

export default function Donate() {
  return (
    <div>
      <PageHeader pageTitle='Make a Contribution'/>

      <div className='container main-content'>
        <div className='row'>
          <div className='col-lg-7'>
            <p>Every donation supports the recipients of Higher Learning Scholarship. We welcome both monetary contributions, as well as specific donation items. </p>

            <Link to='/donate/monetary' className='btn btn-warning mr-4'>Monetary Donations</Link>
            <Link to='/donate/wishlist' className='btn btn-warning'>View Our Donation Wishlist</Link>
          </div>

          <div className='col-lg-5'>
            <img src='../../images/donate-graduates.jpg' className='border rounded-sm mb-5' style={{height: 275 + 'px'}} alt='high school graduates'></img>
          </div>
        </div>
      </div>
    </div>
  )
}