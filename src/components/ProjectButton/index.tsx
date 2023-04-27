import React, {ReactNode} from 'react'

import './ProjectButton.css'

interface ProjectButtonProps{
    children: ReactNode,
    url: string
}

export default function ProjectButton({children, url} : ProjectButtonProps) {
  return (
    <a href={url} target='_blank' className='project-button'>{ children }</a>
  )
}
