import React from 'react'
import { Link } from 'react-router-dom'
import { logoList, marketPlace, myAccount } from '../constants'
import { SearchBox } from '../components'


const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-32">
                    <div className="mx-auto max-w-sm lg:max-w-none">
                        <strong className="text-primary text-2xl font-Integral font-bold"> NFTERS  </strong>
                        <p className="mt-4 text-center lg:text-left lg:text-base">
                            The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
                        </p>

                        <div className="mt-6 flex justify-center gap-4 lg:justify-start">
                            {
                                logoList?.map((item, index) =>
                                    <Link
                                        className="hover:shadow rounded transition"
                                        to={item?.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        key={index}
                                    >
                                        <span className="sr-only"> {item?.name} </span>

                                        {item?.logo}
                                    </Link>
                                )
                            }
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 text-center lg:grid-cols-2 lg:text-left">
                        <div>
                            <strong className="font-bold text-base"> Market Place </strong>
                            <ul className="mt-6 space-y-1">
                                {
                                    marketPlace?.map((item, index) =>
                                        <FooterLink item={item} key={index} />
                                    )
                                }
                            </ul>
                        </div>
                        <div>
                            <strong className="font-bold text-lg"> My Account </strong>

                            <ul className="mt-6 space-y-1">
                                {
                                    myAccount?.map((item, index) =>
                                        <FooterLink item={item} key={index} />)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="mx-auto max-w-sm lg:max-w-none">
                        <strong className="font-bold text-lg"> Stay in the loop </strong>
                        <p className="mt-4 text-center lg:text-left lg:text-base">
                            Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.
                        </p>
                        <div className='mt-6'>
                            <SearchBox from={"footer"} />
                        </div>

                    </div>
                </div>


            </div>
            <div className="mt-16 border-t border-gray py-2 bg-gray">
                <p className="text-center text-xs/relaxed">
                    Copyright © 2022 Avi Yansah
                </p>
            </div>
        </footer>
    )
}

export default Footer

const FooterLink = (props) => {
    const { link, name } = props?.item;
    return (
        <li>
            <Link
                className="text-base"
                to={link}
            >
                {name}
            </Link>
        </li>
    )
}