import React from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

export default function Apply() {
  return (
    <div>
      <PageHeader pageTitle='Apply'/>
      <div className='container main-content'>
        <div className='apply-main-content row mb-4'>
          <div className='col-lg-7'>
            <p>The Higher Learning Scholarship is open to high school seniors who have been admitted to a college or university.</p>

            <Link to='/apply/application-form' className='btn btn-warning'>Begin Your Application </Link>
          </div>
          <div className='col-lg-5'>
            <img src='../images/apply.jpg' className='rounded-sm border' style={{height: 275 + 'px'}}></img>
          </div>
        </div>
      </div>
    </div>
  )
}