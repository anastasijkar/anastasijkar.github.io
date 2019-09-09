import React, { Component } from 'react';
import './Employment.scss';

import * as ScrollMagic from 'ScrollMagic';
import { TimelineLite, Back } from "gsap/all";

import 'animation.gsap'
import 'debug.addIndicators';

import Dizzy from '../assets/dizzy.png';
import Graduation from '../assets/graduation.png';
import Medal from '../assets/medal.png';

import Genie from '../assets/genie.png';
import Inn4Sc from '../assets/inn4s.png';
import TBWA from '../assets/tbwa.png';
import Customers from '../assets/customers.png';

import InfoArrow from '../assets/play-button.svg';

let controller = new ScrollMagic.Controller();

class EmploymentSm extends Component {
  componentDidMount () {
    let sectionTitleImg = document.querySelector('.employment .emoji');

    new ScrollMagic.Scene({
      triggerElement: sectionTitleImg,
      triggerHook: 0.5
    })
    .setTween(new TimelineLite()
        .from(sectionTitleImg, 0.5, {
            transform: 'rotateY(180deg) rotateX(90deg)'
        }, 0))
    .addTo(controller)
    //.addIndicators();

    let items = document.getElementsByClassName('item-sm');
    let arrows = document.getElementsByClassName('arrow-sm');

    for (let i = 0; i < items.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: items[i],
        triggerHook: 0.65,
      })
      .setTween(new TimelineLite()
        .fromTo(items[i], 0.35, {
          transform: 'scale(0)'
        }, {
          transform: 'scale(1)',
          ease: Back.easeOut.config(1.4)
        }))
      .addTo(controller)
      //.addIndicators();
    }

    for (let i = 0; i < arrows.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: arrows[i],
        triggerHook: 0.65,
        duration: 100
      })
      .setTween(new TimelineLite()
        .fromTo(arrows[i], 0.35, {
          height: 0
        }, {
          height: 100
        }))
      .addTo(controller)
      //.addIndicators()
    }
      
  }

  render() {
    return (
      <section className="employment">
        <h2><img className='emoji' src={Dizzy} alt='' /> A long time ago, in a Galaxy far far away...</h2>
        <h3>Well, we all started somehow, and here comes my story</h3>
        <div className='employment__history-wrapper '>
          <div className='employment__history'>

          <div className='employment__row'>
            <div className='employment__history-item history-item item-sm'>
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

            <div className='employment__arrow-next arrow-right arrow-sm'>
              <div className='arrow-inner'>
              </div>
            </div>

            <div className='employment__history-item history-item item-sm'>
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

            <div className='employment__arrow-next arrow-right arrow-even arrow-sm'>
              <div className='arrow-inner'>
              </div>
            </div>

            <div className='employment__history-item history-item item-sm'>
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

            <div className='employment__arrow-next arrow-right arrow-curly1 arrow-sm'>
              <div className='arrow-inner'>
              </div>
            </div>

            <div className='employment__history-item history-item item-sm'>
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

          <div className='employment__arrow-next arrow-even arrow-midlevel arrow-sm'>
            <div className='arrow-inner'>
            </div>
          </div>

          <div className="employment__row row-sm">
            <div className='employment__history-item history-item item-sm'>
              <div className='history-item__date'>
                <span>June <br/><span className='history-item__date-year'>2017</span></span>
              </div>
              <img className='history-item__info-arrow' src={InfoArrow} alt='' />
              <div className='history-item__info'>
                <strong className='sub'>Graduated with
                  <br/>Bachelor’s degree <img className='emoji' src={Medal} alt='' /></strong>
              </div>
            </div>

            <div className='employment__arrow-next arrow-left arrow-sm'>
              <div className='arrow-inner'>
              </div>
            </div>

            <div className='employment__history-item history-item item-tbwa item-sm'>
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

            <div className='employment__arrow-next arrow-left arrow-curly2 arrow-even arrow-sm'>
              <div className='arrow-inner'>
              </div>
            </div>

            <div className='employment__history-item history-item item-sm'>
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
        </div>

      </section>
    );
  }
}

export default EmploymentSm;