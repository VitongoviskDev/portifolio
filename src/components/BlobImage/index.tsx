import React from 'react'

import './BlobImage.css';

interface BlobImageProp{
    image: string
}

export default function BlobImage({image}: BlobImageProp) {
  return (
    <div className="blob-image">
        <div className="blob-image__mask">
            <img src={image} alt="Me standing with my hands behind my back" />
        </div>
    </div>
    
  )
}
