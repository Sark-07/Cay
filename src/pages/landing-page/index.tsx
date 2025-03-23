import React from 'react'

import Steps from '../../sections/Steps';
import Hero from '../../sections/Hero';
import Showcase from '../../sections/Showcase';
import Pricing from '../../sections/Pricing';


type Props = {}

const Landing = (props: Props) => {

    return (
        <>
            <Hero />
            <hr className='opacity-30 bg-slate-50'/>
            <Steps />
            <Showcase/>
            <hr className='opacity-30 bg-slate-50'/>
            <Pricing/>
        </>
    )
}

export default Landing