import React from 'react'

import './Title.css'

interface TitleProps{
    children: string,
    backTitle: string,
    color: 'primary' | 'blue'
}

export default function Title({children, backTitle, color}: TitleProps) {
    const titleStyles={
        color: color === 'primary' ? "var(--clr-primary-700)" : 'var(--clr-highlight-900)'
    }
  return (
    <div className='title' style={titleStyles}>
        <h2 className='title__text'>{children}</h2>
        <span className='title__backtitle'>{backTitle}</span>
    </div>
  )
}
