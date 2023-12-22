import React from 'react'

import './Abilities.css'

import AbilitiesBox from 'components/AbilitiesBox'
import Title from 'components/Title'

export default function Abilites() {
  return (
    <section className="abilities" id="abilities">
        <Title backTitle='minhas' color='blue'>habilidades</Title>
        <p className='abilities__text'>Há algum tempo venho me preparando com cursos e projetos para melhorar como desenvolvedor e essas são as habilidades que desenvolvi desde então.</p>
        <AbilitiesBox/>
    </section>
  )
}
