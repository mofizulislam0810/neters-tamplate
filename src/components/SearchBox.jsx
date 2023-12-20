import React from 'react'
import { FaSistrix } from "react-icons/fa6";

const SearchBox = () => {
    return (
        <div className="relative max-w-lg">
            <label className="sr-only" htmlFor="email"> Email </label>
            <input
                className="w-full rounded-full border-2 p-2 pe-20 text-sm font-medium font-Sans"
                id="email"
                type="email"
                placeholder="search"
            />
            <button
                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full px-5 py-3 text-sm font-medium  transition"
            >
                <FaSistrix />
            </button>
        </div>
    )
}

export default SearchBox