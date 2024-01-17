import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navigation/navbar'
import Hero from '@/components/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='relative'>
      <Navbar/>
      <Hero/>
      
      {/* <Image
        className="relative"
        src="/assets/images/billboard.png"
        alt="Next.js Logo"
        width={500}
        height={100}
        priority
      /> */}
    </main>
  )
}
