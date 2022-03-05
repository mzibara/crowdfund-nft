import { useState, useEffect } from 'react'
import Featured from '../components/home/featured'
import LiveSoon from '../components/home/live-soon'
import Hero from '../components/home/hero'
// import NearlyFunded from '../components/home/nearly-funded'
import Navbar from '../components/shared/navbar'
import Footer from '@/components/shared/footer'


function HomePage() {

    return (
        <div className='w-full'>
            <Navbar />

            <Hero />

            <Featured />

            <LiveSoon />

            {/* <NearlyFunded /> */}

            <Footer />
        </div>
    )
}

export default HomePage
