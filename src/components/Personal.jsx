import React, { Component } from 'react';
import './Personal.scss';

import Linkedin from '../assets/linkedin-logo-hand-drawn-outline.png';
import Mail from '../assets/mail-envelope-back-hand-drawn-outline.png';
import Insta from '../assets/instagram-hand-drawn-logo.png';
import Telegram from '../assets/telegram.png';
import Memo from '../assets/memo.png';
import UA from '../assets/ua.png';
import PL from '../assets/pl.png';
import StarEyes from '../assets/stareyes.png';

import Ph from '../assets/ph2.png';

class Personal extends Component {
  photoFall = () => {
    const photo = document.getElementsByClassName('personal__polaroid')[0];
    photo.classList.add('fallen');
  }

  render() {
    return (
      <section className="personal">
        <h2>
          <img className="emoji" src={Memo} alt="" /> and a bit more, <br/ > <span>besides programming</span>
        </h2>
        <div className="personal__info">
          <p>I can describe myself like as a creative person who gets easily inspired by new things (and even simple things) and excited about meeting new people. I always try to be patient to anything in my life and keep the positive attitude.</p>
          <p>When it comes to hobbies, music takes special place in my life. I've been a vocalist in a band for several years, now do songwriting by myself and record music at home. I like to travel, but who doesn't? Top-3 things in this topic for me are: airplanes, discovering new tasty foods, and going to music festivals. <img className="emoji" src={StarEyes} alt="" /></p>
          <p>I am also interested in yoga, cooking, and eco lifestyle.</p>
          <p>Currently I'm 24 y.o., originally from <img className="emoji" src={UA} alt="" /> Kharkiv, Ukraine, now living in <img className="emoji" src={PL} alt="" /> Poznań, Poland.</p>
        </div>

        <img onClick={this.photoFall} className="personal__polaroid" src={Ph} alt='' />

        <div className="personal__contacts">
          <p>Have something to discuss? Don't hesitate ;)</p>
          <p>You can find me here:</p>
          <div className="personal__contacts-links">
            <a target="_blank" rel="noopener noreferrer" href="mailto:rudich1anastasia@gmail.com"><img src={Mail} alt="Email"/></a>
            <a target="_blank" rel="noopener noreferrer" href="https://t.me/anastasijkar"><img src={Telegram} alt="Telegram"/></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anastasiia-rudych-263155109/"><img src={Linkedin} alt="Linkedin"/></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/anastasijkar/"><img src={Insta} alt="Instagram"/></a>
          </div>
        </div>
        <footer>
          <p className="personal__cv-link"><a href="https://docs.google.com/document/d/1FdctdoGDEPpyFbZotNM-ca7601Hyd1lji-XzUD_Q05M/edit?usp=sharing" rel="noopener noreferrer" target="_blank">[  View / download <s>boring</s> static version of this CV  ]</a></p>

          <p>&copy; Anastasiia Rudych</p>
          <p>Last update: May 16th, 2020</p>

          <p>Icons from <a href="https://www.flaticon.com/authors/pixel-perfect" rel="noopener noreferrer" target="_blank" title="Pixel perfect">here</a> and <a href="https://www.flaticon.com/authors/freepik" rel="noopener noreferrer" target="_blank" title="Freepik">here</a></p>
        </footer>
      </section>
    );
  }
}

export default Personal;