import React from 'react';
import './header.css';

export default function PageHeader(props) {
  return (
    <div>
      <h1 className='page-header'>{props.pageTitle}</h1>
    </div>
  );
}