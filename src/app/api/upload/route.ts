"use server";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file") as File;

  const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });

  const key = new Date().toISOString() + file.name;

  await s3.send(
    new PutObjectCommand({
      Bucket: process.env.BUCKET!,
      Key: key,
      Body: (await file.arrayBuffer()) as Buffer,
      // Expires:
    })
  );

  console.log("hello");
  console.log(await file.text());

  return NextResponse.json("valid", { status: 200 });
}
