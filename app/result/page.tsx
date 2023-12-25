import Stat from '@/components/Stat'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="grid grid-cols-2 grid-rows-4 h-full w-full p-2">
        <Stat number="1.8m" tagline="followers" color1="#9c2dc6" color2="#dbf062"></Stat>
        <Stat number="12k" tagline="followers" color1="#91ee6a" color2="#3f45bd"></Stat>
        <Stat number="12k" tagline="followers" color1="#07f554" color2="#9e2772"></Stat>
        <Stat number="12k" tagline="followers" color1="#0d2d0b" color2="#97fc5c"></Stat>
        <Stat number="12k" tagline="followers" color1="#2b6d13" color2="#fbeeb5"></Stat>
        <Stat number="12k" tagline="followers" color1="#8b0e90" color2="#42eec4"></Stat>
        <Stat number="12k" tagline="followers" color1="#5de691" color2="#0000ff"></Stat>
        <Stat number="12k" tagline="followers" color1="#252704" color2="#ff5c57"></Stat>
    </main>
  )
}
