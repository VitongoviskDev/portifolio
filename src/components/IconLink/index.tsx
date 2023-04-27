import React, { ReactNode } from 'react'

import './IconLink.css'

interface IconLinkProps{
    children: ReactNode,
    color?: 'blue' | 'secondary',
    url: string
}

export default function IconLink({children, color = 'blue', url}: IconLinkProps) {
    const IconStyles ={
        color: color === 'blue' ? 'var(--clr-highlight-900)' : 'var(--clr-secondary-700)'
    }

    return (
        <a 
            className='icon-link'
            href={url}
            style={IconStyles}
            target='_blank'
            >
            {children}
        </a>
    )
}
