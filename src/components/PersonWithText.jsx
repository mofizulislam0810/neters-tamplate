import React from 'react'

const PersonWithText = ({ img, text, subtext, color }) => {
    return (
        <div className='flex gap-2 items-center py-2'>
            <div className='rounded-full p-1'>
                <img src={img} className="w-14 h-14" alt="person" />
            </div>
            <div>
                <p className={`text-xl ${color}`}>{text}</p>
                <p className='text-xs'>{subtext}</p>
            </div>
        </div>
    )
}

export default PersonWithText