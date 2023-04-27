import React from 'react'

import './SquareImage.css'

interface SquareImageProps{
    image: string,
    alt: string
}

export default function SquareImage({image, alt} : SquareImageProps) {
  return (
    <div className="square-image-container">
        <img 
            className="square-image"
            src={image} 
            alt={alt}
        />
    </div>
  )
}
