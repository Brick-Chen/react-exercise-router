import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        <p>Company: ThoughtWorks Local</p>
        <p>Location: Xi'an</p>
        <br/><br/>
        <p>For more information, please</p>
        <p>view our <Link to="/" style={{color: 'red'}}>website</Link>.</p>
      </div>
    );
  }
}

export default AboutUs;