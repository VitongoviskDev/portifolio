import React from 'react'

import './Footer.css'

import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

import IconLink from 'components/IconLink'


export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__links">
            <IconLink url='https://www.linkedin.com/in/vitor-campos-b22a7b263/' color='secondary'><AiFillLinkedin/></IconLink>
            <IconLink url='https://github.com/VitongoviskDev' color='secondary'><AiFillGithub/></IconLink>
        </div>
        <p className="footer__text">Desenvolvido por Vitor Campos</p>
    </footer>
  )
}
