import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer () {
  return(
    <div>
      <footer className='footer mt-auto py-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <h4>| Higher Learning Scholarship Fund</h4>
              <div className='mt-3 pl-2'>
                <i className='far fa-envelope d-inline'></i>
                <a className='d-inline' href='mailto:HigherLearning2019@gmail.com' target='_top'> HigherLearning2019@gmail.com</a>
              </div>
              <div className='mt-2 pl-2'>
                <i className='fas fa-mobile-alt d-inline'></i>
                <p className='d-inline'> Phone Number</p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mt-5'>
                <i className='fab fa-instagram d-inline'></i>
                <a className='d-inline text-black' href='https://www.instagram.com/higherlearningscholarship'> @HigherLearningScholarship</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;