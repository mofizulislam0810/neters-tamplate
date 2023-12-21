import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { headerLink } from '../constants'
import { Button, SearchBox } from '../components'
import { Transition } from '@headlessui/react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-white to-blue-500 w-full border-b-2 boder-tertary py-2">
            <div className="mx-auto px-4 sm:px-6 lg:px-[10%]">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-5">
                        <p className="text-primary text-2xl border-r-2 border-tertiary pe-5 font-Integral font-bold">NFTERS</p>
                        {
                            headerLink?.map((item, index) =>
                                <Link key={index}
                                    to={item?.link}
                                    className="relative hidden lg:block hover:bg-orange transition duration-500 ease-in-out px-6 py-2 rounded-md text-base font-Sans font-semibold"
                                >
                                    {item?.name}
                                </Link>)
                        }
                    </div>
                    <div className="items-center space-x-3 hidden lg:flex">
                        <SearchBox />
                        <Button type={"submit"} btnName={"Upload"} size={"w-30 py-2"} bg={true} />
                        <Button type={"submit"} btnName={"Connect Wallet"} size={"w-30 py-2"} bg={false} />
                    </div>
                    <div className="-mr-2 flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-black inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {() => (
                    <div className="lg:hidden" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-xl">

                        {
                            headerLink?.map((item, index) =>
                                <Link key={index}
                                    to={item?.link}
                                    className="relative block text-center hover:bg-orange transition duration-500 ease-in-out px-6 py-2 rounded-md text-base font-Sans font-semibold"
                                >
                                    {item?.name}
                                </Link>)
                        }
                        <div className='flex justify-center py-1'>
                        <SearchBox />
                        </div>
                        
                        <div className='text-center py-1'>
                        <Button type={"submit"} btnName={"Upload"} size={"w-30 py-2"} bg={true} />
                        </div>
                        <div className='text-center py-1'>
                        <Button type={"submit"} btnName={"Connect Wallet"} size={"w-30 py-2"} bg={false} />
                        </div>
                      
                   
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    )
}

export default Header
