import React from 'react'

const SearchBox = ({ from }) => {
    return (
        <div className="relative max-w-lg">
            <label className="sr-only" htmlFor="email"> Email </label>
            <input
                className="w-full rounded-full border-2 p-3 pe-20 text-sm font-medium font-Sans"
                id="email"
                type="email"
                placeholder="search"
            />
            {
                from === 'footer' ?
                    <button
                        className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full px-5 py-2 text-base text-white font-medium  transition bg-primary"
                    >
                        Subscibe Now
                    </button>
                    : <button
                        className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full px-5 py-3 text-sm font-medium  transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="#757575" />
                            <path d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z" fill="#757575" />
                        </svg>
                    </button>
            }
        </div>
    )
}

export default SearchBox