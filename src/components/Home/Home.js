import React from 'react'
import About from './About/About'
import Banner from './Banner/Banner'
import Faq from './FAQ/Faq'
import Services from './Services/Services'

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <Faq />
        </div>
    )
}

export default Home