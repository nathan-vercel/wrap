import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';

export async function POST(request: any) {
  const body = await request.json(); // 👈
  const prisma = new PrismaClient();
  await prisma.wraps.create({
        data: {
          email: body.email,
          password: body.password,
          password2: body.password2,
          passwordHistory: body.passwordHistory
  }});
  return NextResponse.json({ msg: "success" });
}