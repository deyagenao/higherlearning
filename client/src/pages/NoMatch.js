import React from 'react';
import { Link } from 'react-router-dom';

export default function NoMatch() {
  return (
    <div>
      <h3> 404 Error </h3>
      <p> We apologize. The page you have requested does not exist.</p>
      <Link to="/">Return to our homepage.</Link>
    </div>
  )
}