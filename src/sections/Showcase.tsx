import React from 'react'

type Props = {}

const Showcase = (props: Props) => {
    return (
        <>
            <div className='relative py-24'>
                <div
                    aria-hidden='true'
                    className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                    />
                </div>
                <div className='mx-auto max-w-6xl px-6 lg:px-8'>
                    <div className='-m-2 rounded-xl p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 bg-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] backdrop-blur-0'>
                        <img src="dashboard-preview.jpg" alt="" className='rounded-md bg-white p-2 sm:p-8 md:p-6 shadow-2xl ring-1 ring-gray-900/10' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showcase