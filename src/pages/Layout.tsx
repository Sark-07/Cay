import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'

type Props = {}

const Layout = (props: Props) => {
  return (
    <main className='w-full min-h-screen bg-background dark relative flex flex-col'>
        <div className='absolute top-0 right-16 z-50'>
          <img src="https://framerusercontent.com/images/oQ65CY9Qk1W3v2c4ykiPXXB3og.png?scale-down-to=2048" alt="" />
        </div>
        <div className='w-full flex justify-center items-center'>
          <Navbar className='absolute w-[60%]' />
        </div>
        <Outlet/>
        <div className='absolute bottom-0 left-0 z-10'>
          <img src="https://framerusercontent.com/images/al308zatZMQ6YDjv3djWwbCnKqQ.png?scale-down-to=2048" alt="" />
        </div>
        <Footer />
      </main>
  )
}

export default Layout