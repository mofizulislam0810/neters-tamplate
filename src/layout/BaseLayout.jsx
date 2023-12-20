import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const BaseLayout = () => {
    return (
        <>
            <div className="bg-[#ebf0f4]">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default BaseLayout