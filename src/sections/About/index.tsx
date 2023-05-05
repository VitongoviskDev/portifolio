import React from 'react'

import './About.css'

import Title from 'components/Title'
import TextContentBox from 'components/TextContentBox';

import AboutImage from 'assets/images/About.png';

import SquareImage from 'components/SquareImage';

export default function About() {
  return (
    <section className='about' id='about'>
        <Title backTitle='um pouco' color='primary'>Sobre mim</Title>
        <div className="about-content">
          <TextContentBox title={<>Meu nome é <strong>Vitor Campos</strong></>}>
              Tenho 23 anos e moro em Mogi das Cruzes - SP. 
              Sou formado em Sistemas de Informação pela Universidade de Mogi das Cruzes. 
              Atualmente estou em busca da minha <strong>primeira experiência</strong> como desenvolvedor front-end enquanto continuo a aprimorar minhas <strong>habilidades</strong>.
          </TextContentBox>
          <SquareImage image={AboutImage} alt="Eu digitando em um aplicativo de programação"/>
        </div>
    </section>
  )
}
 