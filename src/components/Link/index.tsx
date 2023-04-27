import React, { ReactNode } from 'react'

import "./Link.css"

interface LinkProps{
    children: ReactNode,
    url: string,
    className?: string;
    onClick?: () => void;
    newTab?: boolean
}



export default function Link({children, url, className, onClick, newTab = false}: LinkProps) {
  return (
    <a 
        onClick={() => onClick}
        rel="noreferrer"
        href={url}
        className={'custom-link ' + className}
        target={ newTab ? '_blank' : '' }
    >
        {children}
    </a>
  )
}