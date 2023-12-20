import React from 'react'
import { Link } from 'react-router-dom'
import { headerLink } from '../constants'
import { Button, SearchBox } from '../components'

const Header = () => {
    return (
        <nav className="bg-white to-blue-500 w-full">
            <div className="mx-auto px-4 sm:px-6 lg:px-[10%]">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-5">
                        <p className="text-primary text-2xl border-r-2 border-tertiary pe-5 font-Integral font-bold">NFTERS</p>
                        {
                            headerLink?.map((item, index) =>
                                <Link key={index}
                                    to={item?.link}
                                    className="relative hover:bg-orange transition duration-500 ease-in-out px-6 py-2 rounded-md text-base font-Sans font-semibold"
                                >
                                    {item?.name}
                                </Link>)
                        }
                    </div>
                    <div className="flex items-center space-x-3">
                        <SearchBox />
                        <Button type={"submit"} btnName={"Upload"} size={"w-30 py-2"} bg={true} />
                        <Button type={"submit"} btnName={"Connect Wallet"} size={"w-30 py-2"} bg={false} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
