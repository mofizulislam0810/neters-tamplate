import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer className="bg-primary">
            {/* <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-6 sm:px-6 lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
                    <div className="mx-auto max-w-sm lg:max-w-none">
                        <p className="mt-4 text-center lg:text-left lg:text-lg text-white">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
                            natus quod eveniet aut perferendis distinctio iusto repudiandae,
                            provident velit earum?
                        </p>

                        <div className="mt-6 flex justify-center gap-4 lg:justify-start">
                            {
                                logoList?.map((item, index) =>
                                    <Link
                                        className="hover:shadow rounded transition text-white"
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

                    <div
                        className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left"
                    >
                        <div>
                            <strong className="font-medium border-b-4 border-secondary text-white"> Services </strong>
                            <ul className="mt-6 space-y-1">
                                {
                                    servicesList?.map((item, index) =>
                                        <FooterLink item={item} key={index} />
                                    )
                                }
                            </ul>
                        </div>

                        <div>
                            <strong className="font-medium border-b-4 border-secondary text-white"> About </strong>

                            <ul className="mt-6 space-y-1">
                                {
                                    aboutList?.map((item, index) =>
                                        <FooterLink item={item} key={index} />)
                                }
                            </ul>
                        </div>

                        <div>
                            <strong className="font-medium border-b-4 border-secondary text-white"> Support </strong>
                            <ul className="mt-6 space-y-1">
                                {
                                    supportList?.map((item, index) =>
                                        <FooterLink item={item} key={index} />)
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-gray-100 pt-8">
                    <p className="text-white text-center text-xs/relaxed">
                        © Company 2022. All rights reserved.
                    </p>
                </div>
            </div> */}
        </footer>
    )
}

export default Footer

// const FooterLink = (props) => {
//     const { link, name } = props?.item;
//     return (
//         <li>
//             <Link
//                 className="text-white hover:text-gray-500/75"
//                 to={link}
//             >
//                 {name}
//             </Link>
//         </li>
//     )
// }