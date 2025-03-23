import React from 'react'

import Steps from '../../sections/Steps';
import Hero from '../../sections/Hero';
import Showcase from '../../sections/Showcase';


type Props = {}

const Landing = (props: Props) => {

    return (
        <>
            <Hero />
            <hr className='opacity-30 bg-slate-50'/>
            <Steps />
            <Showcase/>
        </>
    )
}

export default Landing