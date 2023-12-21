import React from 'react'

const TextWithIcon = ({header,text,icon, color,bold}) => {
    return (
        <div>
            <p className={`text-xs ${color}`}>{header}</p>
            <div className='flex gap-3 items-center'>
                {icon}
                <p className={`text-base ${color} ${bold}`}>{text}</p>
            </div>
        </div>
    )
}

export default TextWithIcon