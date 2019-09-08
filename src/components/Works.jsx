import React, { Component } from 'react';
import './Works.scss';

import FollowDown from './FollowDown';

import PC from '../assets/pc.png';

import ArrowJump from '../assets/right-drawn-arrow.svg';

class Works extends Component {
  jumpToContacts = () => {
    window.scroll({
      top: document.body.scrollHeight - window.innerHeight, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  render() {
    return (
      <section className="works">
        <h2>Curious to see latest projects I’ve been working on? <img className='emoji' src={PC} alt='' /></h2>
        <div className='heading'>
          <span>Feel free to ask me!</span>&nbsp;
          <br /><span className='works__contact-link' onClick={this.jumpToContacts}>Jump to contacts <img src={ArrowJump} alt='Go!' /></span>
        </div>
        <FollowDown nextSection='personal' />
      </section>
    );
  }
}

export default Works;