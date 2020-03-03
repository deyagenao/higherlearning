import React from 'react';
import Carousel from '../components/Carousel';
import MissionElement from '../components/MissionElement';

export default function Home() {
  return (
    <div>
      <Carousel/>
      <div className='container'>
        <MissionElement/>
      </div>
    </div>
  )
}