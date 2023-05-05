import React, { useEffect, useState } from 'react';

import './AbilitiesBox.css'

import IAbility from 'comom/interfaces/IAbility';
import AbilityCard from 'components/AbilityCard';

export default function AbilitiesBox() {
    const [abilities, setAbilities] = useState<IAbility[]>([]);
    const [selectedAbility, setSelectedAbility] = useState<IAbility>();

    useEffect(() =>{
        fetch('https://my-json-server.typicode.com/VitongoviskDev/portifolio-db/abilities')
        .then(response => response.json())
        .then(data => {
            setAbilities(data);
            setSelectedAbility(data[0]);
            console.log('data:', data);
        })
        .catch(error => console.error(error));
    }, []);

    const onSelectAbility = (id:number) => {
        setSelectedAbility(abilities.find(ability => ability.id === id));
    }

    return (
        <div className='abilities-box'>
            <div className="abilities__cards-container">
            {
            abilities.map(ability => (
                <AbilityCard 
                    key={ability.id} 
                    abilityId={ability.id}
                    name={ability.name} 
                    icon={ability.icon} 
                    selected={ability.id === selectedAbility!.id}
                    selectAbility={(id) => onSelectAbility(id)}/>
            ))
            }
            </div >
            {
            selectedAbility &&
            <div className="ability__description-container">
                <h3 className='ability__name'>{selectedAbility.name}</h3>
                <p className='ability__description'>{selectedAbility.description}</p>
                {
                    selectedAbility.certified &&
                    <p className='ability__certified'>{selectedAbility.certified.type}: {selectedAbility.certified.course} - {selectedAbility.certified.plataform}</p>
                }
            </div>     
            }
        </div>
    )
}
