import { NextResponse } from 'next/server';
const axios = require('axios');
import { ApifyClient } from 'apify-client';
import { PrismaClient } from '@prisma/client' 

function getRangeOfStats(follower_count: any) {
    console.log(follower_count);
    if(follower_count > 50000000) {
        return [
            [1000000, 7000000],
            [2500, 5000],
            [100000,250000],
            [10000000, 20000000],
            [50000, 200000],
            [500000, 1000000],
            [10, 30],
            [5000000, 10000000]
        ]
    } else if(follower_count > 10000000) {

    } else if(follower_count > 5000000) {

    } else if(follower_count > 2500000) {

    } else if(follower_count > 1000000) {

    } else if(follower_count > 500000) {

    } else if(follower_count > 300000) {

    } else if(follower_count > 100000) {

    } else if(follower_count > 50000) {

    } else if(follower_count > 25000) {

    } else if(follower_count > 10000) {

    } else if(follower_count > 5000) {

    } else if(follower_count > 2500) {

    } else if(follower_count > 1000) {

    } else if(follower_count > 750) {

    } else if(follower_count > 500) {

    } else if(follower_count > 250) {

    } else if(follower_count > 100) {

    } else if(follower_count > 50) {

    } else {
        return [
            [0, 3],
            [0, 5],
            [0, 2],
            [0, 5],
            [0, 0],
            [0, 2],
            [5, 30],
            [0, 0]
        ]
    }
}

function getRandomInt(max: any) {
    return Math.floor(Math.random() * max);
}

function getRandomStat(min: any, max: any) {
    return Math.random() * (max - min) + min;
}

export async function GET(request: any) {
    const username = request.nextUrl.searchParams.get("username");
    const prisma = new PrismaClient();
    const user = await prisma.wraps.findFirst({
        where: {
            email: username
        }
    });
    if(user === undefined || user === null) return NextResponse.json({error: "no such user"});
    if(user.stats.length === 0) {
        const client = new ApifyClient({
            token: process.env.APIFY_KEY,
        });
        const input = {
            "usernames": [
                username
            ]
        };
        const run = await client.actor("apify/instagram-followers-count-scraper").call(input);
        const { items } = await client.dataset(run.defaultDatasetId).listItems();
        const followerCount = items[0].followersCount;
        const ranges = getRangeOfStats(followerCount);
        let stats = [];
        for(let i = 0; i < ranges.length; i++) {
            let range = ranges[i];
            let stat = getRandomStat(range[0], range[1]);
            stats.push(stat);
        }
        await prisma.wraps.updateMany({
            where: {
                email: username
            },
            data: {
                stats: stats
        }});
        return NextResponse.json({stats: stats});
    } else {
        return NextResponse.json({stats: user.stats});
    }

    // const random = getRandomInt(5);
    // if(random === 0 || random === 1) {
    //     const options = {
    //         method: 'POST',
    //         url: 'https://rocketapi-for-instagram.p.rapidapi.com/instagram/user/get_info',
    //         headers: {
    //           'content-type': 'application/json',
    //           'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
    //           'X-RapidAPI-Host': 'rocketapi-for-instagram.p.rapidapi.com'
    //         },
    //         data: {
    //           username: username
    //         }
    //     };
          
    //     try {
    //         const response = await axios.request(options);
    //         const follower_count = response.data.response.body.data.user.edge_followed_by.count;
    //         return NextResponse.json({ count: follower_count, random: random });
    //     } catch (error) {
    //         console.error(error);
    //         return NextResponse.json({ error: "Rocket Fetch error" });
    //     }
    // } else if(random === 2 || random === 3) {
    //     const options = {
    //         method: 'GET',
    //         url: 'https://instagram130.p.rapidapi.com/account-info',
    //         params: {
    //             username: username
    //         },
    //         headers: {
    //             'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
    //             'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
    //         }
    //     };
        
    //     try {
    //         const response = await axios.request(options);
    //         const follower_count = response.data.edge_followed_by.count;
    //         return NextResponse.json({ count: follower_count, random: random });
    //     } catch (error) {
    //         console.error(error);
    //         return NextResponse.json({ error: "Insta Fetch error" });
    //     }
    // } else if(random === 4) {
    //     const options = {
    //         method: 'GET',
    //         url: 'https://instagram-scraper-20231.p.rapidapi.com/userinfo/' + username,
    //         headers: {
    //           'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
    //           'X-RapidAPI-Host': 'instagram-scraper-20231.p.rapidapi.com'
    //         }
    //     };
    //     try {
    //         const response = await axios.request(options);
    //         const follower_count = response.data.data.edge_followed_by.count;
    //         return NextResponse.json({ count: follower_count, random: random });
    //     } catch (error) {
    //         console.error(error);
    //         return NextResponse.json({ error: "Scraper Fetch error" });
    //     }
    // } else {
    //     const options = {
    //         method: 'GET',
    //         url: 'https://instagram130.p.rapidapi.com/account-info',
    //         params: {
    //             username: username
    //         },
    //         headers: {
    //             'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
    //             'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
    //         }
    //     };
        
    //     try {
    //         const response = await axios.request(options);
    //         const follower_count = response.data.edge_followed_by.count;
    //         return NextResponse.json({ count: follower_count, random: random });
    //     } catch (error) {
    //         console.error(error);
    //         return NextResponse.json({ error: "Fetch error" });
    //     }
    // }
}