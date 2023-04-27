import React, { ReactNode } from 'react'

import './HeroButton.css'

interface HeroButtonProps{
    children: ReactNode,
    outlined?: boolean,
    url: string
}

export default function HeroButton({ children, outlined = false, url }: HeroButtonProps) {
    
    const buttonClassName = `hero-button ${outlined ? 'outlined' : ''}`;
    return (
        <a 
            className={buttonClassName} 
            href={url}
            > 
            {children} 
        </a>
    )
}
