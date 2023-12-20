import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BaseLayout from '../layout/BaseLayout'
import Home from '../pages/Home'


const AllRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<BaseLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>

    )
}

export default AllRoutes