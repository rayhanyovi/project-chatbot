"use client"

import Image from 'next/image'
import RoomChat from '@/components/roomchat'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
     
     <RoomChat />
    

    </main>
  )
}
