import React from 'react'
import PricingCard from '../../sections/components/PricingCard'

type Props = {}

const Pricing = (props: Props) => {
    return (
        <>
            <section className='w-full flex gap-4 items-center justify-center relative z-[99999] h-[calc(100vh-4em)]'>
                <div className='w-full py-4 flex justify-center gap-4'>
                    <PricingCard index={0} color='#262626' title='Free' text={``} />
                    <PricingCard index={1} color='#262626' title='Professional' text={`We will process your file and get it ready to generate questions`} />
                    <PricingCard index={2} color='#262626' title='Enterprise' text={`It's that simple. Try out cay today - it really takes less than a minute.`} />
                </div>
            </section>
        </>
    )
}

export default Pricing