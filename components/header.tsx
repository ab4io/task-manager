import { Image } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { any } from 'zod'

const Header = () => {
  return (
    <div className='flex justify-between items-center gap-3'>
        <div className='flex items-center justify-between'>
            <img src={'public\apple-touch-icon.png'} alt={''} />
            <span className='text-bold text-2xl'>shadecn/ui</span>
        </div>
        <div className='flex gap-2 md:gap-8 lg:gap-10 justify-between bg-white text-gray-700 dark:bg-black dark:text-gray-400'>
            <Link href={'https://ui.shadcn.com/docs'}>Docs</Link>
            <Link href={'https://ui.shadcn.com/docs/components'}>Components</Link>
            <Link href={'https://ui.shadcn.com/blocks'}>Blocks</Link>
            <Link href={'https://ui.shadcn.com/charts'}>Charts</Link>
            <Link href={'https://ui.shadcn.com/themes'}>Themes</Link>
            <Link href={'https://ui.shadcn.com/examples'}>Examples</Link>
            <Link href={'https://ui.shadcn.com/colors'}>Colors</Link>
        </div>
        <div></div>
    </div>
  )
}

export default Header