import Link from 'next/link'
import Stat from '@/components/Stat'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <div className='h-full w-full relative'>
      <main className="grid grid-cols-2 grid-rows-4 h-full w-full p-2 absolute top-0 left-0">
          <Stat number="1.8m" tagline="people screenshotted your posts" color1="#9c2dc6" color2="#dbf062"></Stat>
          <Stat number="2.5m" tagline="times mentioned in direct messages" color1="#91ee6a" color2="#3f45bd"></Stat>
          <Stat number="12k" tagline="people visited your profile twice in one day" color1="#07f554" color2="#9e2772"></Stat>
          <Stat number="44k" tagline="followers don't engage with any of your posts" color1="#0d2d0b" color2="#97fc5c"></Stat>
          <Stat number="78k" tagline="verified accounts visited your profile" color1="#2b6d13" color2="#fbeeb5"></Stat>
          <Stat number="2.5m" tagline="people screenshotted your stories" color1="#252704" color2="#ff5c57"></Stat>
          <Stat number="200" tagline="seconds spend on your profile by the average visitor" color1="#8b0e90" color2="#42eec4"></Stat>
          <Stat number="13.7k" tagline="times you appeared in followers explore page" color1="#5de691" color2="#0000ff"></Stat>
      </main>
      <Link type="button" href="/login" className="absolute top-[48%] left-[30%] z-10 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Check your Wrapped</Link>
  </div>
  )
}
