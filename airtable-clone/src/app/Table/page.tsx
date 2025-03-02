import React from 'react'
import BaseNav from '~/app/_components/BaseNav';
import Table from '~/app/_components/Table';

const LogIn = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <header className='flex-none w-full bg-[#8c3f78]'>
        <BaseNav />
      </header>

      <div className='flex flex-auto w-full h-full bg-black/20'>
        <Table />
      </div>

    </div>
      
  )
}

export default LogIn;