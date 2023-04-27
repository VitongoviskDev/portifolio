import React from 'react'

import './AbilityCard.css'

interface AbilityCardProps {
    abilityId: number,
    name: string,
    icon: string,
    selected: boolean,
    selectAbility: (id: number) => void
  }

export default function AbilityCard({abilityId, name, icon, selected, selectAbility}: AbilityCardProps) {
    const abilityCardClassName = `ability-card ${selected ? ' selected' : ''}`;

  return (
    <div className={abilityCardClassName} onClick={() => selectAbility(abilityId)}>
        <img className='ablility__icon' src={icon += '?raw=true'} alt={`${name}`} />
        <span className='ablility__icon__disabler'></span>
    </div>
  )
}
