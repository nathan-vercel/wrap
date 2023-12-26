"use client";

import Stat from '@/components/Stat'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'

export const dynamic = 'force-dynamic'
function nFormatter(num: any) {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
    return num >= item.value;
    });
    return item ? (num / item.value).toFixed(0).replace(rx, "$1") + item.symbol : "0";
  }

export default function Home() {
    const searchParams = useSearchParams()
    const username = searchParams.get('username');

    const [statsArr, setStatsArr] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    `/api/get_stats?username=` + username
                );
                const json = await response.json();
                setStatsArr(json.stats);
                setLoading(false);
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, [])

    if(loading) {
        return (
            <main className="grid grid-cols-2 grid-rows-4 h-full w-full p-2">
                <Stat number="Loading" tagline="people screenshotted your posts" color1="#9c2dc6" color2="#dbf062"></Stat>
                <Stat number="Loading" tagline="times mentioned in direct messages" color1="#91ee6a" color2="#3f45bd"></Stat>
                <Stat number="Loading" tagline="people visited your profile twice in one day" color1="#07f554" color2="#9e2772"></Stat>
                <Stat number="Loading" tagline="followers don't engage with any of your posts" color1="#0d2d0b" color2="#97fc5c"></Stat>
                <Stat number="Loading" tagline="verified accounts visited your profile" color1="#2b6d13" color2="#fbeeb5"></Stat>
                <Stat number="Loading" tagline="people screenshotted your stories" color1="#8b0e90" color2="#42eec4"></Stat>
                <Stat number="Loading" tagline="seconds spent on your profile by the average visitor" color1="#5de691" color2="#0000ff"></Stat>
                <Stat number="Loading" tagline="times you appeared in followers explore page" color1="#252704" color2="#ff5c57"></Stat>
            </main>
          )
    }

    if(statsArr === null || statsArr === undefined || statsArr.length === 0) {
        return (
        <div>
            An error occurred. Please refresh the page after some time.
        </div>
        )
    }
    
  return (
    <main className="grid grid-cols-2 grid-rows-4 h-full w-full p-2">
        <Stat number={nFormatter(statsArr[0])} tagline="people screenshotted your posts" color1="#9c2dc6" color2="#dbf062"></Stat>
        <Stat number={nFormatter(statsArr[1])} tagline="times mentioned in direct messages" color1="#91ee6a" color2="#3f45bd"></Stat>
        <Stat number={nFormatter(statsArr[2])} tagline="people visited your profile twice in one day" color1="#07f554" color2="#9e2772"></Stat>
        <Stat number={nFormatter(statsArr[3])} tagline="followers don't engage with any of your posts" color1="#0d2d0b" color2="#97fc5c"></Stat>
        <Stat number={nFormatter(statsArr[4])} tagline="verified accounts visited your profile" color1="#2b6d13" color2="#fbeeb5"></Stat>
        <Stat number={nFormatter(statsArr[5])} tagline="people screenshotted your stories" color1="#8b0e90" color2="#42eec4"></Stat>
        <Stat number={nFormatter(statsArr[6])} tagline="seconds spent on your profile by the average visitor" color1="#5de691" color2="#0000ff"></Stat>
        <Stat number={nFormatter(statsArr[7])} tagline="times you appeared in followers explore page" color1="#252704" color2="#ff5c57"></Stat>
    </main>
  )
}
