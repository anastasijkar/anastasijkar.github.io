import React, { Component } from 'react';
import './Skills.scss';

import FollowDown from './FollowDown';

import SkillsHand from '../assets/skills.png';
import SkillsAdd from '../assets/skills_add.png';
import Languages from '../assets/speaking-head.png';

import Skill1 from '../assets/skill_1.png';
import Skill2 from '../assets/skill_2.png';
import Skill3 from '../assets/skill_3.png';
import Skill4 from '../assets/skill_4.png';

class Skills extends Component {
  render() {
    return (
      <section className="skills">
        <h1>Let’s talk about SKILLS <img className='emoji' src={SkillsHand} alt='' /></h1>
        <div className='skills__content'>
          <div className='skills__content-item'>
            <img src={Skill4} alt='Fluent' title='Have a bunch of experience with' />
            <p>HTML, CSS/SCSS, Responsive Styling, JavaScript, ES6+, React/Redux</p>
          </div>
          <div className='skills__content-item'>
            <img src={Skill3} alt='Advanced' title='Have been working with that a lot, still there is always room to grow' />
            <p>Vue/Vuex, Redux Saga</p>
          </div>
          <div className='skills__content-item'>
            <img src={Skill2} alt='Familiarity' title='Can work with that, but early in the process / worked with that > 1 year ago' />
            <p>Node.js, Firebase
              <br/>Browser extensions development</p>
          </div>
          <div className='skills__content-item'>
            <img src={Skill1} alt='Basics' title='Know basic concepts from University / online tutorials' />
            <p>Jest, Jasmine
              <br/>Angular, Ionic, React Native
              <br/>C# .Net / ASP.Net, </p>
          </div>
        </div>
        <div className='skills__etc'>
          <p><img className='emoji' src={SkillsAdd} alt='' /> and of course, I am familiar with modern web development tools such as Webpack, ESLint,
            <br/>have a lot of experience with git,
            <br/>can deal with Photoshop, Sketch, inVision etc.</p>
        </div>
        <div className='skills__etc etc-languages'>
          <p><img className='emoji' src={Languages} alt='' /> I've been using English on everyday basis for a long time,
            <br />so there's no problem for me with speaking or understanding technical documentation.
            <br />Ukrainian and Russian are my mother tongues.
            <br />Also I'm quite comfortable with Polish, both spoken and written.</p>
        </div>
        
        <FollowDown fancy nextSection='works' />

      </section>
    );
  }
}

export default Skills;