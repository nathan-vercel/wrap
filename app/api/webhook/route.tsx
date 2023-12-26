import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';
 
export async function POST(request: any) {
    const body = await request.json(); // 👈
    console.log(body);
    return NextResponse.json({status: 200})
}