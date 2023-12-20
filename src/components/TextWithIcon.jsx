import React from 'react'

const TextWithIcon = ({header,text,icon}) => {
    return (
        <div>
            <p className='text-base text-white'>{header}</p>
            <div className='flex gap-3 items-center'>
                {icon}
                <p className='text-sm text-white'>{text}</p>
            </div>
        </div>
    )
}

export default TextWithIcon