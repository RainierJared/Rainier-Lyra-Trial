import React from 'react'
import BaseNav from '~/app/_components/BaseNav';
import Table from '~/app/_components/Table';

const table = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <header className='flex-none w-full bg-[#8c3f78]'>
        <BaseNav />
      </header>

      <div className='flex flex-auto w-full h-full'>
        <Table />
      </div>
    </div>
      
  )
}

export default table;