import React from 'react'

const NftsCard = ({ item, profileImage }) => {
    return (
        <div className="flex-shrink-0 relative overflow-hidden bg-white rounded-xl shadow-lg">
            <div className='p-2'>
                <div className="relative flex items-center justify-center">
                    <img className="rounded-xl object-cover lg:h-72 lg:w-72 w-full h-full" src={item.image} alt="sepcial images" />
                    <div className='absolute -bottom-5 left-5 flex'>
                        <div className="z-0 -mr-3"><img src={profileImage[0]} className="w-10 h-10 rounded-full" alt="person" /></div>
                        <div className="z-10 -mr-3"><img src={profileImage[1]} className="w-10 h-10 rounded-full" alt="person" /></div>
                        <div className="z-20 -mr-3"><img src={profileImage[2]} className="w-10 h-10 rounded-full" alt="person" /></div>
                        <div className="z-30 -mr-3"><img src={profileImage[3]} className="w-10 h-10 rounded-full" alt="person" /></div>
                    </div>
                </div>
                <div className="relative mt-6 px-2">
                    <div className="flex justify-between items-center py-3">
                        <div>
                            <p className="text-base font-bold text-black">{item.header}</p>
                            <div className='flex gap-3 items-center text-green font-bold py-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                    <g clipPath="url(#clip0_402_127)">
                                        <path d="M9.24746 8.15568L4.80473 10.9395L0.35907 8.15568L4.80473 0.332275L9.24746 8.15568ZM4.80473 11.8334L0.35907 9.04961L4.80473 15.6911L9.25038 9.04961L4.80473 11.8334V11.8334Z" fill="#00AC4F" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_402_127">
                                            <rect width="9.35928" height="15.3588" fill="white" transform="translate(0.125 0.332275)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="text-sm text-green">0.25 ETH</p>
                            </div>
                        </div>
                        <span className="block font-semibold text-xs text-tertiary">1 of 321</span>
                    </div>
                    <div className="flex justify-between border-t-2 py-3 text-primary">
                        <span className="bg-secondary rounded-full text-xs font-bold px-3 py-2 leading-none flex items-center">3h 50m 2s left</span>
                        <span className="block font-semibold text-lg">Place a bid</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NftsCard