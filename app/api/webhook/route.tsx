import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';
import { ApifyClient } from 'apify-client';

export async function POST(request: any) {
    const body = await request.json(); // 👈
    const actorRunId = body.eventData.actorRunId;
    const url = `https://api.apify.com/v2/actor-runs/${actorRunId}/dataset/items?token=${process.env.APIFY_KEY}`
    const response = await fetch(url);
    const json = await response.json();
    const follower_count = json[0].followersCount;
    console.log(follower_count);
    return NextResponse.json({status: 200})
}