import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';

class ApplicationForm extends Component {
  state = {

  };

  componentDidMount() {};

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // API call, figure out how to display a message to show application has been submitted

  }

  render() {
    return (
      <div>
        <PageHeader pageTitle='Higher Learning Application'/>

        <div className='container'>
          <div className='row'>
            <h3>Eligibility Requirements</h3>
          </div>

          <div className='row'>
            {/* Application Form */}
          </div>
        </div>
      </div>
    );
  };
};

export default ApplicationForm;