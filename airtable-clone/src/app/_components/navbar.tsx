'use client'
import React from 'react'
import Image from "next/image";
import { useSession, signOut, signIn, SessionProvider } from 'next-auth/react';

export default function navbar() {
  return (
    <nav className="flex items-center w-full px-2">
      <div className="flex-auto">
        <div className="flex items-center">
          <Image className="m-1 mr-6" role="button"
           src="/images/hamburger.png"
            width={20}
            height={20}
            alt="Hamburger button"
          />
          <a href="/">
           <Image 
             src="/images/airtable-logo.png"
             width={100}
              height={10}
             alt="Airtable Logo"
           />
         </a>
        </div>
    </div>

    <div className="flex-auto justify-center">
      <div className="flex items-center shadow-md rounded-lg relative px-2" role="button">
          <Image 
             src="/images/mag-icon.png"
              width={10}
              height={10}
             alt="Search bar"
           />
          <p className="text-left pl-2">Search...</p>
          <p className="absolute inset-y-0 right-0 w-12">ctrl K</p>
      </div>
    </div>
    <div className="flex-auto justify-center items-center">
      <div className="float-right rounded-lg px-2 py-0.5 bg-black text-white" role="button">
        <SessionProvider>
          <AuthShowcase />
        </SessionProvider>
        
      </div>
      <div className="float-right mr-2 border-2 rounded-full" role="button">
          <Image 
             src="/images/bell.png"
              width={24}
              height={24}
             alt="Notifications bell"
           />
      </div>
    </div>
    </nav>
  )
}

const AuthShowcase: React.FC = () => {
    const { data: sessionData } = useSession()

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-center text-2x1 text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
      </p>
      <button className="rounded-full bg-black font-semibold text-white"
       onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  )
}