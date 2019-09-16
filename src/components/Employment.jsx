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

const ANIM_DURATION = 50;

class Employment extends Component {

  commonParallax = (desktop, historyWrapper, history) => {

    historyWrapper.style.height = `${historyWrapper.offsetHeight + (ANIM_DURATION*12) - history.offsetHeight/1.8}px`;

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

    if (desktop) {
      new ScrollMagic.Scene({
        triggerElement: historyWrapper,
        triggerHook: 0.3
      })
      .setTween(new TimelineLite()
        .to(history, 0, {
            position: 'fixed',
            top: '30%',
            left: '25px'
        }, 0))
      .addTo(controller)
      //.addIndicators();
    }
    
  }

  row1Parallax = (desktop, historyWrapper) => {
    let row1 = document.getElementsByClassName('row')[0];
    let row1item1 = row1.children[0];
    let row1arrow1 = row1.children[1];
    let row1item2 = row1.children[2];
    let row1arrow2 = row1.children[3];
    let row1item3 = row1.children[4];
    let row1arrow3 = row1.children[5];
    let row1item4 = row1.children[6];

    new ScrollMagic.Scene({
      triggerElement: historyWrapper,
      triggerHook: 0.3,
      offset: 0,
    })
    .setTween(new TimelineLite()
      .fromTo(row1item1, 0.35, {
        transform: 'scale(0)'
      }, {
        transform: 'scale(1)',
        ease: Back.easeOut.config(1.4)
      }))
    .addTo(controller)
    //.addIndicators();

    new ScrollMagic.Scene({
      triggerElement: historyWrapper,
      triggerHook: 0.3,
      offset: ANIM_DURATION,
      duration: ANIM_DURATION
    })
    .setTween(new TimelineLite()
      .fromTo(row1arrow1, 0.35, {
        opacity: 0,
        transform: 'translateX(-10%)'
      }, {
        opacity: .25,
        transform: 'translateX(0)'
      }))
    .addTo(controller)
    //.addIndicators();

    new ScrollMagic.Scene({
      triggerElement: historyWrapper,
      triggerHook: 0.3,
      offset: ANIM_DURATION * 2,
    })
    .setTween(new TimelineLite()
      .fromTo(row1item2, 0.35, {
        transform: 'scale(0)'
      }, {
        transform: 'scale(1)',
        ease: Back.easeOut.config(1.4)
      }))
    .addTo(controller)
    //.addIndicators();

    new ScrollMagic.Scene({
      triggerElement: historyWrapper,
      triggerHook: 0.3,
      offset: ANIM_DURATION * 3,
      duration: ANIM_DURATION
    })
    .setTween(new TimelineLite()
      .fromTo(row1arrow2, 0.35, {
        opacity: 0,
        transform: 'translateX(-10%)'
      }, {
        opacity: .25,
        transform: 'translateX(0)'
      }))
    .addTo(controller)
    //.addIndicators();

    new ScrollMagic.Scene({
      triggerElement: historyWrapper,
      triggerHook: 0.3,
      offset: ANIM_DURATION * 4,
    })
    .setTween(new TimelineLite()
      .fromTo(row1item3, 0.35, {
        transform: 'scale(0)'
      }, {
        transform: 'scale(1)',
        ease: Back.easeOut.config(1.4)
      }))
    .addTo(controller)
    //.addIndicators();

    new ScrollMagic.Scene({
      triggerElement: historyWrapper,
      triggerHook: 0.3,
      offset: ANIM_DURATION * 5,
      duration: ANIM_DURATION
    })
    .setTween(new TimelineLite()
      .fromTo(row1arrow3, 0.35, {
        opacity: 0,
        transform: 'translateX(-10%)'
      }, {
        opacity: .25,
        transform: 'translateX(0)'
      }))
    .addTo(controller)
    //.addIndicators();

    new ScrollMagic.Scene({
      triggerElement: historyWrapper,
      triggerHook: 0.3,
      offset: ANIM_DURATION * 6,
    })
    .setTween(new TimelineLite()
      .fromTo(row1item4, 0.35, {
        transform: 'scale(0)'
      }, {
        transform: 'scale(1)',
        ease: Back.easeOut.config(1.4)
      }))
    .addTo(controller)
    //.addIndicators();
  }

  midLevelParallax = (desktop, historyWrapper, history) => {
    let midLevelArrow = document.querySelector('.arrow-midlevel');

    new ScrollMagic.Scene({
      triggerElement: historyWrapper,
      triggerHook: 0.3,
      offset: ANIM_DURATION * 6,
      duration: ANIM_DURATION * 2
    })
    .setTween(new TimelineLite()
      .fromTo(midLevelArrow, 0.35, {
        height: 0
      }, {
        height: 250
      }))
    .addTo(controller)
    //.addIndicators();

    new ScrollMagic.Scene({
      triggerElement: historyWrapper,
      triggerHook: 0.3,
      offset: ANIM_DURATION * 6,
      duration: ANIM_DURATION * 2
    })
    .setTween(new TimelineLite()
      .to(history, 0.35, {
        transform: 'translateY(-20%)'
      }))
    .addTo(controller)
    //.addIndicators();
  }

  row2Parallax = (desktop, historyWrapper) => {
    let row2 = document.getElementsByClassName('row')[1];
    let row2item1 = row2.children[0];
    let row2arrow1 = row2.children[1];
    let row2item2 = row2.children[2];
    let row2arrow2 = row2.children[3];
    let row2item3 = row2.children[4];

    new ScrollMagic.Scene({
      triggerElement: historyWrapper,
      triggerHook: 0.3,
      offset: ANIM_DURATION * 8,
    })
    .setTween(new TimelineLite()
      .fromTo(row2item1, 0.35, {
        transform: 'scale(0)'
      }, {
        transform: 'scale(1)',
        ease: Back.easeOut.config(1.4)
      }))
    .addTo(controller)
    //.addIndicators();

    new ScrollMagic.Scene({
      triggerElement: historyWrapper,
      triggerHook: 0.3,
      offset: ANIM_DURATION * 9,
      duration: ANIM_DURATION
    })
    .setTween(new TimelineLite()
      .fromTo(row2arrow1, 0.35, {
        opacity: 0,
        transform: 'scaleX(-1) translateX(-10%)'
      }, {
        opacity: .25,
        transform: 'scaleX(-1) translateX(0)'
      }))
    .addTo(controller)
    //.addIndicators();

    new ScrollMagic.Scene({
      triggerElement: historyWrapper,
      triggerHook: 0.3,
      offset: ANIM_DURATION * 10,
    })
    .setTween(new TimelineLite()
      .fromTo(row2item2, 0.35, {
        transform: 'scale(0)'
      }, {
        transform: 'scale(1)',
        ease: Back.easeOut.config(1.4)
      }))
    .addTo(controller)
    //.addIndicators();

    new ScrollMagic.Scene({
      triggerElement: historyWrapper,
      triggerHook: 0.3,
      offset: ANIM_DURATION * 11,
      duration: ANIM_DURATION
    })
    .setTween(new TimelineLite()
      .fromTo(row2arrow2, 0.35, {
        opacity: 0,
        transform: 'scaleX(-1) translateX(-10%)'
      }, {
        opacity: .25,
        transform: 'scaleX(-1) translateX(0)'
      }))
    .addTo(controller)
    //.addIndicators();

    new ScrollMagic.Scene({
      triggerElement: historyWrapper,
      triggerHook: 0.3,
      offset: ANIM_DURATION * 12,
    })
    .setTween(new TimelineLite()
      .fromTo(row2item3, 0.35, {
        transform: 'scale(0)'
      }, {
        transform: 'scale(1)',
        ease: Back.easeOut.config(1.4)
      }))
    .addTo(controller)
    //.addIndicators();
  }

  componentDidMount () {
    let historyWrapper = document.querySelector('.history-wrapper');
    let history = document.querySelector('.history');

    this.commonParallax(true, historyWrapper, history);
    this.row1Parallax(true, historyWrapper);
    this.midLevelParallax(true, historyWrapper, history);
    this.row2Parallax(true, historyWrapper);

    new ScrollMagic.Scene({
      triggerElement: historyWrapper,
      triggerHook: 0.3,
      offset: ANIM_DURATION * 12,
      duration: history.offsetHeight
    })
    .setTween(new TimelineLite()
      .fromTo(history, 0.5, {
        transform: `translateY(-15%)`
      }, {
        transform: `translateY(-${history.offsetHeight * 1.5}px)`
      }))
    .addTo(controller)
    //.addIndicators();
  }


  render() {
    return (
      <section className="employment">
        <h2><img className='emoji' src={Dizzy} alt='' /> A long time ago, in a Galaxy far far away...</h2>
        <h3>Well, we all started somehow, and here comes my story</h3>
        <div className='employment__history-wrapper history-wrapper'>
          <div className='employment__history history'>

          <div className='employment__row row'>
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

          <div className="employment__row row">
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
        </div>
      </section>
    );
  }
}

export default Employment;