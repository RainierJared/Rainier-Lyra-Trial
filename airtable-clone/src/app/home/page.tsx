import NavBar from "../_components/navbar";

import React from 'react'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
    <div className="flex-none  w-full">
      <header className="w-full border-b-2">
        <NavBar />
      </header>
    </div>

    <a href="/table">
    <div className="rounded-[5] bg-blue-900 text-white mt-2 p-1">
      <h1 className="font-bold">Go to Untitled Base</h1>
    </div>
    </a>

    <div>
      <h1 className="font-bold">Welcome to Airtable 2 Test</h1>
    </div>
</div>
  )
}