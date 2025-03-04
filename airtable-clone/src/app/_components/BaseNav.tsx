import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

export default function BaseNav() {
  return (
    <div>
    <nav className='flex items-center px-4 py-4'>
        <div className='flex items-center'>
            <Link 
            href="/">
              <Image
              src='/images/white-airtable.png'
              width={20}
              height={20}
              alt="Airtable logo"
            />
             </Link>
        </div>

        <div className='flex items-center' role='button'>
                <p className='text-white font-bold ml-4'>Untitled Base</p>
                <p className='text-white ml-2 text-xs'>V</p>
        </div>
    </nav>
    <div className='bg-[#7e396c] text-white'>
        <SubNav />
    </div>
    
    </div>
  )
}

const SubNav: React.FC = () => {
  return (
    <div className='ml-4 py-1'>
        Sub Nav
    </div>
  )
}
