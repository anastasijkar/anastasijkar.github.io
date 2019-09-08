import React, { Component } from 'react';
import './FollowDown.scss';

import smoothscroll from 'smoothscroll-polyfill';

import Arrow from '../assets/right-arrow-outline.svg';
import ArrowFancy from '../assets/3d-up-arrow.svg';

smoothscroll.polyfill();

class FollowDown extends Component {
  scrollToNext = (nextSection) => {
    let scrollTo = document.getElementsByClassName(nextSection)[0].offsetTop + document.getElementsByClassName(nextSection)[0].children[0].offsetTop/1.5;
    window.scroll({
      top: scrollTo, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  render() {
    return (
      <div className={`arrow-down ${this.props.fancy && 'arrow-fancy'}`}>
        { this.props.children }
        <img onClick={() => this.scrollToNext(this.props.nextSection)} src={this.props.fancy ? ArrowFancy : Arrow} alt='Scroll down' />
      </div>
    );
  }
}

export default FollowDown;