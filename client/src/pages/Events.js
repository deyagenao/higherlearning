import React from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

export default function Events() {
  return (
    <div>
      <PageHeader pageTitle='Our Events'/>

      <div className='events-main-content ml-5 mb-5'>
        <h3 className='mb-4'>Upcoming Events</h3>
        <div className='row'>
          <div className='col-lg-6'>
            <img src='../images/tailgate-event.png' alt='tailgate-event' className='border rounded-sm mb-3' style={{height:475+ 'px'}}></img>
          </div>
          <div className='col-lg-6'>
            <h5><b>Details:</b></h5>
            <p>Date: June 2020</p>
            <p>Location: Rockland County Police Department</p>
            <Link to='#' className='btn btn-warning'>Register to Attend This Event</Link>
          </div>

          <div className='row ml-3 mt-5'>
            <h3 className='mb-4'>Past Events</h3>
            <img src='../images/previous-winners.png' alt='previous winners' className='border rounded-sm mb-3' style={{height:475+ 'px'}}></img>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}