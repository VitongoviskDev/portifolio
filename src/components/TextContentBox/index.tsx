import { title } from 'process'
import React, { ReactNode } from 'react'

import './TextContentBox.css'

interface TextContentBoxProps{
    children : ReactNode,
    title?: ReactNode
}

export default function TextContentBox({children, title}:TextContentBoxProps) {
  return (
    <div className='text-content-box'> 
    {
        title &&
        <h3 className='text-content__title'>{title}</h3>
    }
        <p>{ children }</p>
    </div>
  )
}
