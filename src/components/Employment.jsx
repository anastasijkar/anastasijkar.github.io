import React, { Component } from 'react';
import './Employment.scss';

import FollowDown from './FollowDown';

import Dizzy from '../assets/dizzy.png';
import Graduation from '../assets/graduation.png';
import Medal from '../assets/medal.png';

import Genie from '../assets/genie.png';
import Inn4Sc from '../assets/inn4s.png';
import TBWA from '../assets/tbwa.png';
import Customers from '../assets/customers.png';

import InfoArrow from '../assets/play-button.svg';

class Employment extends Component {
  render() {
    return (
      <section className="employment">
        <h2><img className='emoji' src={Dizzy} alt='' /> A long time ago, in a Galaxy far far away...</h2>
        <h3>Well, we all started somehow, and here comes my story</h3>
        <div className='employment__history'>

        <div className='employment__row'>
          <div className='employment__history-item history-item'>
            <div className='history-item__date'>
              <span>May <br/><span className='history-item__date-year'>2013</span></span>
            </div>
            <img className='history-item__info-arrow' src={InfoArrow} alt='' />
            <div className='history-item__info'>
              <strong>Markup Developer</strong>
              <img className='info' src={Genie} alt='Genie Solutions' />
              <p>was my first part-time job, where I had a chance to work on something real and make sure I like the thing.</p>
            </div>
          </div>

          <div className='employment__arrow-next arrow-right'>
            <div className='arrow-inner'>
            </div>
          </div>

          <div className='employment__history-item history-item'>
            <div className='history-item__date'>
              <span>September <br/><span className='history-item__date-year'>2013</span></span>
            </div>
            <img className='history-item__info-arrow' src={InfoArrow} alt='' />
            <div className='history-item__info'>
              <strong className='sub'>Entered University <img className='emoji' src={Graduation} alt='' />
                <br />on SW Engineering</strong>
              <p>and decided to quit the job to put more effort to studies.</p>
            </div>
          </div>

          <div className='employment__arrow-next arrow-right arrow-even'>
            <div className='arrow-inner'>
            </div>
          </div>

          <div className='employment__history-item history-item'>
            <div className='history-item__date'>
              <span>Summer <br/><span className='history-item__date-year'>2016</span></span>
            </div>
            <img className='history-item__info-arrow' src={InfoArrow} alt='' />
            <div className='history-item__info'>
              <strong className='sub'>Took a part in 
                <br/>a student-powered startup
                <br/>as frontend developer</strong>
              <p>had lots of fun with basics of JS, Instagram API and even some ASP.Net.</p>
            </div>
          </div>

          <div className='employment__arrow-next arrow-right arrow-curly1'>
            <div className='arrow-inner'>
            </div>
          </div>

          <div className='employment__history-item history-item'>
            <div className='history-item__date'>
              <span>March <br/><span className='history-item__date-year'>2017</span></span>
            </div>
            <img className='history-item__info-arrow' src={InfoArrow} alt='' />
            <div className='history-item__info'>
              <strong>Frontend Developer</strong>
              <img className='info' src={Inn4Sc} alt='Inn4Science' />
              <p>worked on different stuff - from landing pages to SPA’s
                <br />(Angular.js, Vue.js)</p>
            </div>
          </div>
        </div>

        <div className='employment__arrow-next arrow-even arrow-midlevel'>
          <div className='arrow-inner'>
          </div>
        </div>

        <div className="employment__row">
          <div className='employment__history-item history-item'>
            <div className='history-item__date'>
              <span>June <br/><span className='history-item__date-year'>2017</span></span>
            </div>
            <img className='history-item__info-arrow' src={InfoArrow} alt='' />
            <div className='history-item__info'>
              <strong className='sub'>Graduated with
                <br/>Bachelor’s degree <img className='emoji' src={Medal} alt='' /></strong>
            </div>
          </div>

          <div className='employment__arrow-next arrow-left'>
            <div className='arrow-inner'>
            </div>
          </div>

          <div className='employment__history-item history-item item-tbwa'>
            <div className='history-item__date'>
              <span>June <br/><span className='history-item__date-year'>2018</span></span>
            </div>
            <img className='history-item__info-arrow' src={InfoArrow} alt='' />
            <div className='history-item__info'>
              <strong>Frontend Developer</strong>
              <img className='info' src={TBWA} alt='TBWA /Mobile' />
              <p>had a chance to work with well-known brands such as
                <br/><img className='customers' src={Customers} alt='Dobbi by Persil, McDonalds Netherlands, Esso, Blokker.nl' />
                <br/>put a lot of effort in gamification web experiences</p>
            </div>
          </div>

          <div className='employment__arrow-next arrow-left arrow-curly2 arrow-even'>
            <div className='arrow-inner'>
            </div>
          </div>

          <div className='employment__history-item history-item'>
            <div className='history-item__date'>
              <span>June <br/><span className='history-item__date-year'>2019</span></span>
            </div>
            <img className='history-item__info-arrow' src={InfoArrow} alt='' />
            <div className='history-item__info'>
              <strong>promoted to Full Stack JS</strong>
              <p>started dealing with node.js & Firebase Cloud Functions </p>
            </div>
          </div>
        </div>

        </div>

        <FollowDown nextSection='skills' />
      </section>
    );
  }
}

export default Employment;