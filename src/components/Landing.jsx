import React, { Component } from 'react';
import './Landing.scss';

import FollowDown from './FollowDown';

import Photo from '../assets/photo.png';
import Earth from '../assets/earth.png';
import Hand from '../assets/hand.png';

class Landing extends Component {
  render() {
    return (
      <section className="landing">
        <h1>Hi there! <img className='emoji' src={Hand} alt='' /></h1>
        <img className='landing__photo' src={Photo} alt='The pic of me' />
        <p>My name is Nastia,
        <br/>I am a JavaScript Developer from planet Earth <img className='emoji' src={Earth} alt='' />
        <br/>with 3 years of relevant experience.</p>
        <FollowDown nextSection='employment'>
          <span>Learn more about what I do</span>
        </FollowDown>
      </section>
    );
  }
}

export default Landing;