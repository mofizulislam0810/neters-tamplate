import React from 'react'

const PersonWithText = ({ img, text }) => {
    return (
        <div className='flex gap-4 items-center py-2'>
            <div className='rounded-full p-1 bg-white'>
                <img src={img} className="w-10 h-10" alt="person" />
            </div>
            <p className='text-xl text-white'>{text}</p>
        </div>
    )
}

export default PersonWithText