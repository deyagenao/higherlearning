import React from 'react';
import { Link } from 'react-router-dom';

export default function Carousel () {
  return(
    <div>
      <div id='homepage-carousel' className='carousel slide carousel-fade' data-ride='carousel'>
        <ol className='carousel-indicators'>
          <li data-target='#about' data-slide-to='0' className='active'></li>
          <li data-target='#donate' data-slide-to='1'></li>
          <li data-target='#apply' data-slide-to='2'></li>
          <li data-target='#events' data-slide-to='3'></li>
        </ol>
        <div className='carousel-inner'>
          {/* first slide */}
          <div className='carousel-item active'>
            <img src='../../images/main-1.jpg' class='d-block w-100' alt='homeImage'></img>
            <div className='carousel-caption d-none d-md-block'>
              <h1>Higher Learning Scholarship Fund</h1>
              <p>For the Community. From the Community.</p>
            </div>
          </div>

          {/* second slide */}
          <div className='carousel-item'>
            <img src='../../images/donate.jpg' class='d-block w-100' alt='donate'></img>
            <div className='carousel-caption d-none d-md-block'>
              <h1>Make A Contribution</h1>
              <p>Donate in More Than One Way</p>
            </div>
          </div>

          {/* third slide */}
          <div className='carousel-item'>
            <img src='../../images/apply-2.jpg' class='d-block w-100' alt='apply'></img>
            <div className='carousel-caption d-none d-md-block'>
              <h1>Apply for the Higher Learning Scholarship</h1>
              <p>High School Seniors: Begin Your Application Today</p>
            </div>
          </div>

          {/* fourth slide */}
          <div className='carousel-item'>
            <img src='../../images/events.jpg' class='d-block w-100' alt='events'></img>
            <div className='carousel-caption d-none d-md-block'>
              <h1>Our Events</h1>
              <p>Check Out and Register for Our Upcoming Events</p>
            </div>
          </div>
        </div>

        <a class="carousel-control-prev" href="#homepage-carousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#homepage-carousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}