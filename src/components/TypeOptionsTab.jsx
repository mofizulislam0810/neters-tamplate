import React from 'react'

const TypeOptionsTab = ({ options, setData, data }) => {
    return (
        <ul className="flex flex-wrap justify-start">
            {
                options?.map((item, index) => <li key={index} className={`${data === item?.name ? "bg-primary  text-white transition delay-100 duration-700 ease-out" : " bg-[#e5e8ebfa] transition delay-100 duration-700 ease-out"} ' w-30 py-2 px-5 cursor-pointer my-3 mx-1  rounded-full`} onClick={() => setData(item?.name)}>
                    <p className='text-sm'>{item?.name}</p>
                </li>)
            }
        </ul>
    )
}

export default TypeOptionsTab