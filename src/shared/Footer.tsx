import React from 'react'
import { cn } from '../../@/lib/utils';



const Footer = ({ className }: { className?: string }) => {
  return (
    <>
      <div className={cn('mt-auto z-[9999] relative', className)}>
        <hr className='opacity-30 bg-slate-50' />
        <div className='text-center py-4 w-full dark:text-[#565656af] text-sm font-medium'>
          Cay | copyright &#xa9; {new Date().getFullYear()}
        </div>
      </div>
    </>
  )
}

export default Footer