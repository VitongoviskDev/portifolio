import React, { ReactNode, useEffect, useState } from 'react';

import './TextBox.css'

interface TextBoxProps{
    placeholder: string,
    value: string,
    onChange: (currentValue : string) => void
}

export default function TextBox({placeholder, value, onChange}:TextBoxProps) {
    return (
        <div className='text-box'>
            <label htmlFor={"textBox" + value}>{placeholder}</label>
            <input type="text" id={"textBox" + value} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)}/>
        </div>
    )
}
