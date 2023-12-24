import React from 'react'

import './warning.css'


import { IoMdClose  } from "react-icons/io";

interface WarningProps{
    shown: boolean,
    title: string,
    message: string
    onClick: () => void
}

export default function Warning({shown, title, message, onClick}: WarningProps) {
  
    const warningStyle = {
        display: shown ? "flex" : "none"
    }

  return (
    <div className='warning' onClick={onClick} style={warningStyle}>
        <div className="warning__messageBox">
            <IoMdClose className="warning__close"/>
            <h2 className="warning__title">{title}</h2>
            <p className="warning__text">{message}</p>
        </div>
    </div>
  )
}