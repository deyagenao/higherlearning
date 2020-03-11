import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './pages/Home';
import Donate from './pages/Donate';
import MonetaryDonation from './pages/MonetaryDonation';
import WishList from './pages/WishList';
import WishListForm from './pages/WishListForm';
import Apply from './pages/Apply';
import ApplicationForm from './pages/ApplicationForm';
import Events from './pages/Events';
import About from './pages/About';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav/>

          {/* Individual Routes */}
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/donate' component={Donate}/>
            <Route exact path='/donate/monetary' component={MonetaryDonation}/>
            <Route exact path='/donate/wishlist' component={WishList}/>
            <Route exact path='/donate/wishlist/form' component={WishListForm}/> 
            <Route exact path='/apply' component={Apply}/>
            <Route exact path='/apply/application-form' component={ApplicationForm}/>
            <Route exact path='/events' component={Events}/>
            <Route exact path='/about' component={About}/>
            <Route component={NoMatch}/>

            {/* Private Routes */}
          </Switch>

          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
