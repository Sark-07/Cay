import React from 'react'

type Props = {}

const Error404 = (props: Props) => {
    return (
        <>
            <div className='w-full relative z-[99] mx-auto h-[calc(100vh-2em)] grid place-items-center'>
                <img src="notFound.jpeg" alt="" className='w-full h-full aspect-video object-cover object-center'/>
            </div>
        </>
    )
}

export default Error404