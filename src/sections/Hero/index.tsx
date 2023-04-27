import React from 'react'

import './Hero.css';

//Components
import BlobImage from 'components/BlobImage';
import HeroButton from 'components/HeroButton';
import IconLink from 'components/IconLink';

//Images
import Me from 'assets/images/Hero.png';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

export default function Hero() {
  return (
    <section className="hero" id='home'>
      <BlobImage image={Me}/>
      <div className="hero__container">
        <div className="hero__text-container">
          <h3 className='hero__overtitle'>Olá</h3>
          <h1 className='hero__title'>Eu sou Vitor</h1>
          <h2 className='hero__subtitle'>desenvolvedor front-end</h2>
          <p className='hero__text'>Estou em busca de experiência. Que tal ver um pouco mais sobre mim antes de entrar em contato?</p>
        </div>
        <div className="hero__buttons-container">
          <HeroButton url='#about'>Sobre mim</HeroButton>
          <HeroButton url='#contact' outlined>Diga olá</HeroButton>
        </div>
        <div className="hero__links-container">
          <IconLink url='https://www.linkedin.com/in/vitor-campos-b22a7b263/'><AiFillLinkedin/></IconLink>
          <IconLink url='https://github.com/VitongoviskDev'><AiFillGithub/></IconLink>
        </div>
      </div>
    </section>
  );
}
